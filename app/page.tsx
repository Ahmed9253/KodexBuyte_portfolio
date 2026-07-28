import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Process from '@/components/process';
import CTA from '@/components/cta';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
