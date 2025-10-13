import { properties } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, Bath, LandPlot, Calendar, MapPin, CheckCircle, Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ContactButtons } from "@/components/contact-buttons";

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Image Carousel */}
          <Carousel className="w-full rounded-2xl overflow-hidden">
            <CarouselContent>
              {property.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video">
                    <Image src={img.url} alt={img.alt} layout="fill" objectFit="cover" className="rounded-2xl" data-ai-hint={img.hint} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>

          {/* Property Header */}
          <div>
            <h1 className="text-4xl font-headline font-bold">{property.title}</h1>
            <div className="flex items-center text-muted-foreground text-lg mt-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{property.address}</span>
            </div>
          </div>
          
          {/* Key Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Card className="p-4 bg-card">
              <BedDouble className="w-8 h-8 mx-auto text-accent" />
              <p className="mt-2 font-semibold">{property.bedrooms} Bedrooms</p>
            </Card>
            <Card className="p-4 bg-card">
              <Bath className="w-8 h-8 mx-auto text-accent" />
              <p className="mt-2 font-semibold">{property.bathrooms} Bathrooms</p>
            </Card>
            <Card className="p-4 bg-card">
              <LandPlot className="w-8 h-8 mx-auto text-accent" />
              <p className="mt-2 font-semibold">{property.area.toLocaleString()} sqft</p>
            </Card>
             <Card className="p-4 bg-card">
              <Calendar className="w-8 h-8 mx-auto text-accent" />
              <p className="mt-2 font-semibold">Built in {property.yearBuilt}</p>
            </Card>
          </div>

          {/* Description */}
          <Card className="bg-card">
            <CardHeader><CardTitle>Property Description</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground leading-relaxed">{property.description}</p></CardContent>
          </Card>

          {/* Amenities */}
          <Card className="bg-card">
            <CardHeader><CardTitle>Amenities</CardTitle></CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map(amenity => (
                  <li key={amenity} className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-muted-foreground">{amenity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sticky Sidebar */}
        <aside className="lg:sticky top-24 h-fit">
          <Card className="p-6 rounded-2xl shadow-xl">
             <div className="text-center mb-6">
                <p className="text-muted-foreground text-lg">Starting from</p>
                <p className="text-4xl font-bold text-primary">${property.price.toLocaleString()}</p>
             </div>
             <div className="flex items-center gap-4 mb-6">
                 <Image src={property.agent.avatarUrl} alt={property.agent.name} width={64} height={64} className="rounded-full object-cover" />
                 <div>
                     <p className="font-bold text-lg">{property.agent.name}</p>
                     <p className="text-sm text-muted-foreground">{property.agent.title}</p>
                 </div>
             </div>
             
             <ContactButtons phone={property.agent.phone} whatsappText={`I'm interested in the property: ${property.title}`} />
             
             <div className="mt-8">
                 <h3 className="font-bold text-center mb-4">Mortgage Calculator</h3>
                 <p className="text-center text-sm text-muted-foreground">Widget coming soon...</p>
             </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
