import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";
import { Gallery } from "@/components/Gallery/Gallery";
import { StoriesFilms } from "@/components/StoriesFilms/StoriesFilms";
import { Services } from "@/components/Services/Services";
import { Packages } from "@/components/Packages/Packages";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { WhatsAppButton } from "@/components/WhatsApp/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />`r`n      <WhyChooseUs />
        <Gallery />
        <StoriesFilms />
        <Services />
        <Packages />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}






