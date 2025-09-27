import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Wifi, Coffee, Car, Tv, Wind, Users } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Habitación Deluxe Vista al Mar",
    description: "Habitación cómoda y elegante con vista al océano Pacífico, perfecta para parejas",
    image: "https://images.unsplash.com/photo-1603824889006-d787ba5f8490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdGVsJTIwcm9vbSUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NTg2ODE1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$3,200 MXN",
    size: "35 m²",
    capacity: "2 huéspedes",
    amenities: [
      { icon: Wifi, label: "WiFi Gratuito" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Coffee, label: "Minibar" }
    ]
  },
  {
    id: 2,
    name: "Suite Ejecutiva Frente al Mar",
    description: "Amplia suite con área de estar separada y amenidades premium con vista panorámica",
    image: "https://images.unsplash.com/photo-1597126729864-51740ac05236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHN1aXRlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NTg2ODE1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$6,400 MXN",
    size: "65 m²",
    capacity: "4 huéspedes",
    amenities: [
      { icon: Wifi, label: "WiFi Gratuito" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wind, label: "Aire Acondicionado" },
      { icon: Coffee, label: "Minibar Premium" },
      { icon: Users, label: "Sala de Estar" },
      { icon: Car, label: "Estacionamiento" }
    ]
  },
  {
    id: 3,
    name: "Habitación Estándar",
    description: "Acogedora habitación con vista al jardín y todas las amenidades esenciales",
    image: "https://images.unsplash.com/photo-1603824889006-d787ba5f8490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdGVsJTIwcm9vbSUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NTg2ODE1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$2,100 MXN",
    size: "25 m²",
    capacity: "2 huéspedes",
    amenities: [
      { icon: Wifi, label: "WiFi Gratuito" },
      { icon: Tv, label: "Televisión" },
      { icon: Wind, label: "Aire Acondicionado" }
    ]
  }
];

export function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Nuestras Habitaciones</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Elige entre nuestras habitaciones cuidadosamente diseñadas, cada una ofreciendo 
            comodidad, estilo y amenidades modernas para una estancia perfecta frente al mar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {room.price}/noche
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{room.name}</CardTitle>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                      <span>{room.size}</span>
                      <span>•</span>
                      <span>{room.capacity}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-2">
                  {room.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium">Amenidades</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <amenity.icon className="w-4 h-4 text-primary" />
                        <span>{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}