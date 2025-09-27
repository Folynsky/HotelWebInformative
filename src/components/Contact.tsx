import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock, Car, Waves } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Av. Gómez Farías #1", "Melaque, 48980", "Cihuatlán, Jalisco, México"]
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+52 315 355 5023", "WhatsApp: +52 315 123 4567"]
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    details: ["reservas@hotelmelaquepuestadelsol.com", "info@hotelmelaquepuestadelsol.com"]
  },
  {
    icon: Clock,
    title: "Horarios de Recepción",
    details: ["Recepción 24 horas", "Atención personalizada"]
  }
];

const nearbyAttractions = [
  { name: "Playa Melaque", distance: "50 metros" },
  { name: "Playa Barra de Navidad", distance: "2 km" },
  { name: "Laguna de Navidad", distance: "3 km" },
  { name: "Pueblo Mágico Barra de Navidad", distance: "2.5 km" },
  { name: "Golf Club Isla Navidad", distance: "8 km" }
];

const transportation = [
  { icon: Car, name: "Estacionamiento Gratuito", info: "Disponible para huéspedes" },
  { icon: Waves, name: "Acceso Directo a Playa", info: "A solo 50 metros del hotel" }
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Contáctanos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ponte en contacto con nosotros para reservaciones, consultas, o cualquier 
            asistencia que necesites durante tu estancia en Costa Alegre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl mb-6">Información de Contacto</h3>
            
            {contactInfo.map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location & Transportation */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-6">Ubicación y Servicios</h3>
              
              {/* Transportation Options */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Servicios del Hotel</CardTitle>
                  <CardDescription>
                    Comodidades disponibles para nuestros huéspedes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {transportation.map((transport, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <transport.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{transport.name}</p>
                        <p className="text-sm text-muted-foreground">{transport.info}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Nearby Attractions */}
              <Card>
                <CardHeader>
                  <CardTitle>Atractivos Cercanos</CardTitle>
                  <CardDescription>
                    Lugares populares que puedes visitar durante tu estancia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {nearbyAttractions.map((attraction, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{attraction.name}</span>
                        <span className="text-sm text-muted-foreground">{attraction.distance}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Nuestra Ubicación</CardTitle>
            <CardDescription>
              Ubicado frente a la hermosa Playa Melaque en la Costa Alegre de Jalisco
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Mapa interactivo se mostraría aquí</p>
                <p className="text-sm">Av. Gómez Farías #1, Melaque, 48980 Cihuatlán, Jalisco, México</p>
                <p className="text-xs mt-1">Costa Alegre - Océano Pacífico</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}