import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Demo } from "@/components/sections/Demo";
import { Contact } from "@/components/sections/Contact";

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Demo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
