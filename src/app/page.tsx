import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import Presence from '@/components/sections/Presence';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import WaFloat from '@/components/WaFloat';
import SectionIndex from '@/components/SectionIndex';
import LeadTracker from '@/components/LeadTracker';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <Presence />
      <FAQ />
      <Contact />
      <Footer />
      <WaFloat />
      <SectionIndex />
      <LeadTracker />
    </>
  );
}
