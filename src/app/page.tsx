import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Coverage from '@/components/sections/Coverage';
import Team from '@/components/sections/Team';
import Products from '@/components/sections/Products';
import Fleet from '@/components/sections/Fleet';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import WaFloat from '@/components/WaFloat';
import SectionIndex from '@/components/SectionIndex';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <Coverage />
      <Team />
      <Products />
      <Fleet />
      <FAQ />
      <Contact />
      <Footer />
      <WaFloat />
      <SectionIndex />
    </>
  );
}
