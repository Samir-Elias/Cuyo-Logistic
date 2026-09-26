// Server component: el mapa se calcula en el build y llega como SVG estático.
import { geoTransverseMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, Geometry } from 'geojson';
import world from 'world-atlas/countries-50m.json';
import { COUNTRIES, DEPOTS } from '@/data/site';

const W = 520;
const H = 720;

// Países de Sudamérica que se dibujan como contexto.
const CONTEXT_IDS = new Set(['032', '068', '076', '152', '170', '218', '238', '328', '600', '604', '740', '858', '862']);
const ACTIVE_IDS = new Set(COUNTRIES.map(c => c.id));

// Posición de la etiqueta de cada país [lng, lat] y alineación.
const LABELS: Record<string, { at: [number, number]; anchor: 'start' | 'middle' | 'end' }> = {
  AR: { at: [-65.5, -38.5], anchor: 'middle' },
  CL: { at: [-73.6, -27], anchor: 'end' },
  UY: { at: [-53.2, -33.2], anchor: 'start' },
  PY: { at: [-58.2, -22.6], anchor: 'middle' },
};

export default function PresenceMap() {
  const topo = world as unknown as Topology<{ countries: GeometryCollection<{ name: string }> }>;
  const all = feature(topo, topo.objects.countries) as FeatureCollection<Geometry, { name: string }>;
  const feats = all.features.filter(f => CONTEXT_IDS.has(String(f.id)));

  // Mercator transversal centrada en 64°O (base de la cartografía oficial argentina):
  // no estira la Patagonia como Mercator y respeta las proporciones norte-sur.
  const projection = geoTransverseMercator().rotate([64, 0]).fitExtent(
    [[8, 8], [W - 8, H - 8]],
    { type: 'MultiPoint', coordinates: [[-82, -15], [-49, -15], [-82, -55.5], [-49, -55.5]] },
  ).clipExtent([[0, 0], [W, H]]); // descarta lo que queda fuera del recuadro (baja mucho el peso del SVG)
  const path = geoPath(projection).digits(1);
  const pt = (lng: number, lat: number) => projection([lng, lat]) ?? [0, 0];

  return (
    <svg className="pmap" viewBox={`0 0 ${W} ${H}`} role="img"
         aria-label="Mapa de Argentina, Chile, Uruguay y Paraguay con la ubicación de nuestros depósitos">
      <defs>
        <clipPath id="pmap-clip"><rect width={W} height={H} rx="8" /></clipPath>
        <pattern id="pmap-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth=".5" opacity=".08" />
        </pattern>
      </defs>
      <g clipPath="url(#pmap-clip)">
        <rect width={W} height={H} fill="url(#pmap-grid)" />
        {feats.map(f => (
          <path
            key={String(f.id)}
            d={path(f) ?? ''}
            className={ACTIVE_IDS.has(String(f.id)) ? 'pm-on' : 'pm-ctx'}
          />
        ))}

        {COUNTRIES.map(c => {
          const l = LABELS[c.iso];
          const [x, y] = pt(...l.at);
          return (
            <text key={c.iso} x={x} y={y} textAnchor={l.anchor} className="pm-label">
              {c.name.toUpperCase()}
            </text>
          );
        })}

        {DEPOTS.map(d => {
          const [x, y] = pt(d.lng, d.lat);
          return (
            <g key={`${d.country}-${d.name}`} transform={`translate(${x} ${y})`} className={d.hq ? 'pm-pin hq' : 'pm-pin'}>
              {d.hq && <circle r="14" className="pm-pulse" />}
              <circle r={d.hq ? 6 : 4.5} className="pm-dot" />
              <text x={d.labelSide === 'left' ? -10 : 10} y={4} textAnchor={d.labelSide === 'left' ? 'end' : 'start'}
                    className="pm-pin-label">{d.name}{d.hq ? ' · Sede' : ''}</text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
