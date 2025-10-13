import Link from 'next/link';
import Image from 'next/image';
import type { Property } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BedDouble, Bath, LandPlot, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-card">
      <Link href={`/listings/${property.id}`} className="block">
        <div className="relative">
          <Image
            src={property.images[0].url}
            alt={property.images[0].alt}
            width={800}
            height={600}
            className="w-full h-60 object-cover"
            data-ai-hint={property.images[0].hint}
          />
          {property.isFeatured && (
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-accent">Featured</Badge>
          )}
           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
             <h3 className="text-xl font-headline font-bold text-white">{property.title}</h3>
           </div>
        </div>
        <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-primary">${property.price.toLocaleString()}</p>
                <Badge variant="secondary">{property.status}</Badge>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mr-1.5"/>
                <span>{property.location}</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm pt-4 border-t border-border/40">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <BedDouble className="w-5 h-5 text-accent" />
                    <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Bath className="w-5 h-5 text-accent" />
                    <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <LandPlot className="w-5 h-5 text-accent" />
                    <span>{property.area.toLocaleString()} sqft</span>
                </div>
            </div>
        </CardContent>
      </Link>
    </Card>
  );
}
