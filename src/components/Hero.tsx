import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1574059220554-f6e5bbc88577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdGVsJTIwbG9iYnklMjBNZXhpY298ZW58MXx8fHwxNzU4NjgxNTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hotel Lobby Frente al Mar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl mb-6">
          Bienvenido a Hotel Melaque Puesta del Sol
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Experimenta la tranquilidad y comodidad en las hermosas costas de Melaque, Jalisco. 
          Ubicado en la Costa Alegre, nuestro hotel ofrece vistas espectaculares al Pacífico 
          y una estancia auténtica frente al mar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('rooms')}
            className="bg-white text-primary hover:bg-gray-100"
          >
            Explorar Habitaciones
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection('quote')}
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  );
}