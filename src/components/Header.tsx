import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground">H</span>
          </div>
          <span className="text-xl font-semibold">Hotel Melaque Puesta del Sol</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('rooms')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Habitaciones
          </button>
          <button 
            onClick={() => scrollToSection('facilities')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Instalaciones
          </button>
          <button 
            onClick={() => scrollToSection('quote')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Cotizar
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>

        <Button onClick={() => scrollToSection('quote')}>
          Cotizar
        </Button>
      </div>
    </header>
  );
}