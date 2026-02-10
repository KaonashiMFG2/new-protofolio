import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workexp from "./components/Workexp";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// import LogoAnimation from "./components/LogoAnimation";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[950px]">
        <Hero />
      </main>

      <main className="mx-auto max-w-[950px]">
        <Skills />
      </main>

      <Workexp />

      <Testimonials />

      <Contacts />

      <Footer />
    </>
  );
}
