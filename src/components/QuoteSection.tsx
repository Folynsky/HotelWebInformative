import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, CalendarDays, User, Mail, Phone, MessageSquare, Calculator } from "lucide-react";

const roomRates = {
  standard: 2100,
  deluxe: 3200,
  suite: 6400
};

const seasonMultipliers = {
  alta: 1.3,    // Diciembre - Marzo
  media: 1.1,   // Abril - Junio, Octubre - Noviembre  
  baja: 1.0     // Julio - Septiembre
};

export function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
    specialRequests: ''
  });

  const [calculatedQuote, setCalculatedQuote] = useState<{
    nights: number;
    basePrice: number;
    seasonMultiplier: number;
    totalPrice: number;
    season: string;
  } | null>(null);

  const getSeason = (date: Date) => {
    const month = date.getMonth() + 1;
    if (month >= 12 || month <= 3) return 'alta';
    if ((month >= 4 && month <= 6) || (month >= 10 && month <= 11)) return 'media';
    return 'baja';
  };

  const calculateQuote = () => {
    if (!formData.checkIn || !formData.checkOut || !formData.roomType) {
      setCalculatedQuote(null);
      return;
    }

    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (nights <= 0) {
      setCalculatedQuote(null);
      return;
    }

    const season = getSeason(checkInDate);
    const basePrice = roomRates[formData.roomType as keyof typeof roomRates] || 0;
    const seasonMultiplier = seasonMultipliers[season as keyof typeof seasonMultipliers];
    const totalPrice = Math.round(basePrice * nights * seasonMultiplier);

    setCalculatedQuote({
      nights,
      basePrice,
      seasonMultiplier,
      totalPrice,
      season
    });
  };

  useEffect(() => {
    calculateQuote();
  }, [formData.checkIn, formData.checkOut, formData.roomType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app, this would send to a backend
    const quoteInfo = calculatedQuote ? 
      `\n\nCotización calculada:\n- ${calculatedQuote.nights} noches\n- Precio total: ${calculatedQuote.totalPrice.toLocaleString()} MXN\n- Temporada: ${calculatedQuote.season}` 
      : '';
    
    alert(`¡Solicitud de cotización enviada! Te contactaremos dentro de 24 horas.${quoteInfo}`);
    console.log('Quote request:', formData, 'Calculated quote:', calculatedQuote);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quote" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Calculadora de Cotización</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Obtén una cotización instantánea para tu estancia en Hotel Melaque Puesta del Sol. 
            Selecciona tus fechas y tipo de habitación para ver el precio automáticamente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Calculadora Automática
              </CardTitle>
              <CardDescription>
                Selecciona tus fechas y tipo de habitación para ver el precio instantáneo
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                {/* Stay Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Fecha de Entrada *
                    </Label>
                    <Input
                      id="checkIn"
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => handleChange('checkIn', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="checkOut" className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      Fecha de Salida *
                    </Label>
                    <Input
                      id="checkOut"
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => handleChange('checkOut', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guests">Número de Huéspedes *</Label>
                    <Select onValueChange={(value) => handleChange('guests', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona número de huéspedes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Huésped</SelectItem>
                        <SelectItem value="2">2 Huéspedes</SelectItem>
                        <SelectItem value="3">3 Huéspedes</SelectItem>
                        <SelectItem value="4">4 Huéspedes</SelectItem>
                        <SelectItem value="5+">5+ Huéspedes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="roomType">Tipo de Habitación *</Label>
                    <Select onValueChange={(value) => handleChange('roomType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tipo de habitación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Habitación Estándar</SelectItem>
                        <SelectItem value="deluxe">Habitación Deluxe</SelectItem>
                        <SelectItem value="suite">Suite Ejecutiva</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {calculatedQuote && (
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-3">Cotización Calculada</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Noches:</span>
                        <span>{calculatedQuote.nights}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Precio por noche:</span>
                        <span>${calculatedQuote.basePrice.toLocaleString()} MXN</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temporada:</span>
                        <span className="capitalize">{calculatedQuote.season}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Multiplicador estacional:</span>
                        <span>{calculatedQuote.seasonMultiplier}x</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                        <span>Total:</span>
                        <span className="text-primary">${calculatedQuote.totalPrice.toLocaleString()} MXN</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    * Selecciona fechas y tipo de habitación para calcular el precio automáticamente
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Solicitar Información
              </CardTitle>
              <CardDescription>
                Completa tus datos para recibir información detallada y confirmar tu reserva
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Ingresa tu nombre completo"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Correo Electrónico *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="Ingresa tu correo electrónico"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Número de Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="Ingresa tu número de teléfono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Solicitudes Especiales o Comentarios</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleChange('specialRequests', e.target.value)}
                    placeholder="Solicitudes especiales, requerimientos dietéticos, o información adicional..."
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full">
                    Solicitar Cotización
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    * Campos requeridos. Te responderemos en 24 horas.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}