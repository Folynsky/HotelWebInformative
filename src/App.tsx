import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Rooms } from "./components/Rooms";
import { Facilities } from "./components/Facilities";
import { QuoteSection } from "./components/QuoteSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Facilities />
        <QuoteSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}