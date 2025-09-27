import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Waves } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center">
                <Waves className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-semibold">Hotel Melaque</div>
                <div className="text-sm">Puesta del Sol</div>
              </div>
            </div>
            <p className="text-primary-foreground/80">
              Experimenta la tranquilidad y belleza de la Costa Alegre en Melaque, Jalisco. 
              Tu escape perfecto frente al Océano Pacífico te espera.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-primary-foreground/70 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-primary-foreground/70 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-primary-foreground/70 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Inicio</a></li>
              <li><a href="#rooms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Habitaciones</a></li>
              <li><a href="#facilities" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Instalaciones</a></li>
              <li><a href="#quote" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cotización</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">WiFi Gratuito</li>
              <li className="text-primary-foreground/80">Estacionamiento Gratuito</li>
              <li className="text-primary-foreground/80">Renta de Equipo de Playa</li>
              <li className="text-primary-foreground/80">Información Turística</li>
              <li className="text-primary-foreground/80">Limpieza Diaria</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Av. Gómez Farías #1, Melaque, 48980 Cihuatlán, Jalisco, México
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm text-primary-foreground/80">
                  +52 315 355 5023
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm text-primary-foreground/80">
                  info@hotelmelaquepuestadelsol.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Hotel Melaque Puesta del Sol. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}