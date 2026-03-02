import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-premium-gradient selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
      </main>
      <Footer />
    </div>
  );
}
