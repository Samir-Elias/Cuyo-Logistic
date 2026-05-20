import type { CSSProperties } from 'react';

export function Skeleton({
  className,
  style,
  dark,
}: {
  className?: string;
  style?: CSSProperties;
  dark?: boolean;
}) {
  const cls = ['skeleton', dark ? 'dark' : '', className].filter(Boolean).join(' ');
  return <div className={cls} style={style} aria-label="Cargando datos actualizados" role="status" />;
}
