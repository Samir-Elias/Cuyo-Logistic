import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Stats from '@/components/sections/stats';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Coverage from '@/components/sections/coverage';
import Contact from '@/components/sections/contact';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
