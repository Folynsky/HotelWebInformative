import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Waves, MapPin, Wifi, Car, Coffee } from "lucide-react";

const facilities = [
  {
    id: 1,
    name: "Alberca Frente al Mar",
    description: "Alberca al aire libre con vista directa al océano Pacífico, perfecta para relajarse",
    image: "https://images.unsplash.com/photo-1713500292472-15f041b333d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMHN3aW1taW5nJTIwcG9vbCUyMG9jZWFufGVufDF8fHx8MTc1ODY4MTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Waves,
    hours: "6:00 AM - 10:00 PM"
  },
  {
    id: 2,
    name: "Área de Descanso al Aire Libre",
    description: "Terrazas y jardines con hamacas y asientos cómodos para disfrutar del clima tropical",
    image: "https://images.unsplash.com/photo-1681875795780-068c213eed70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdGVsJTIwdGVycmFjZSUyMGxvdW5nZSUyMG91dGRvb3J8ZW58MXx8fHwxNzU4ODUyMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Coffee,
    hours: "24/7"
  },
  {
    id: 3,
    name: "Acceso Directo a Playa Melaque",
    description: "Acceso privado a la hermosa playa de Melaque, a solo pasos de tu habitación",
    image: "https://images.unsplash.com/photo-1706409946203-18e620f87be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWxhcXVlJTIwYmVhY2glMjBwYWNpZmljJTIwbWV4aWNvfGVufDF8fHx8MTc1ODg1MjAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Waves,
    hours: "24/7"
  }
];

const additionalAmenities = [
  { icon: Wifi, name: "WiFi Gratuito", description: "Internet de alta velocidad en todo el hotel" },
  { icon: Car, name: "Estacionamiento Gratuito", description: "Disponible para todos los huéspedes" },
  { icon: Waves, name: "Renta de Equipo de Playa", description: "Sombrillas, sillas y toallas" },
  { icon: Coffee, name: "Área de Café y Snacks", description: "Bebidas y aperitivos disponibles" },
  { icon: MapPin, name: "Información Turística", description: "Mapas y recomendaciones locales" }
];

export function Facilities() {
  return (
    <section id="facilities" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Instalaciones del Hotel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Disfruta de amenidades esenciales y de calidad diseñadas para hacer tu estancia 
            cómoda, relajante e inolvidable en la Costa Alegre.
          </p>
        </div>

        {/* Main Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility) => (
            <Card key={facility.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground p-2 rounded-full">
                  <facility.icon className="w-5 h-5" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{facility.name}</CardTitle>
                <CardDescription>{facility.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Horario:</span>
                  <span>{facility.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Amenities */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl mb-8 text-center">Amenidades Adicionales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalAmenities.map((amenity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <amenity.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{amenity.name}</h4>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}