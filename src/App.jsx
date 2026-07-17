import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <main
        className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8"
        style={{
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <section id="contact-form" className="py-16 sm:py-24">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
