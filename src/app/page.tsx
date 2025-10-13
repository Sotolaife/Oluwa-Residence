import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { placeholderImages, properties, testimonials } from "@/lib/data";
import { PropertyCard } from "@/components/property-card";

export default function Home() {
  const featuredProperties = properties.filter(p => p.isFeatured).slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center">
        <Image
          src={placeholderImages.hero.imageUrl}
          alt={placeholderImages.hero.description}
          fill
          className="object-cover"
          data-ai-hint={placeholderImages.hero.imageHint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Find Your Place of Lasting Comfort
            </h1>
            <p className="text-lg text-gray-200 md:text-xl">
              Premium homes for families and expatriates — integrity, luxury, and seamless buying experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/listings">
                  Browse Listings
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://wa.me/2348012345678?text=I'm%20interested%20in%20scheduling%20a%20viewing." target="_blank" rel="noopener noreferrer">
                  Schedule a Viewing
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Featured Properties</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our handpicked selection of premium properties, where luxury meets comfort.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
             <Button asChild variant="link" className="text-accent text-base">
                <Link href="/listings">
                  View All Properties <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from those who have found their dream homes with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {testimonials.slice(0,3).map((testimonial) => (
              <Card key={testimonial.id} className="bg-card border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} />
                    ))}
                  </div>
                  <blockquote className="text-lg font-semibold leading-snug">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="flex items-center gap-4 pt-2">
                     <Image src={testimonial.avatarUrl} alt={testimonial.name} width={48} height={48} className="rounded-full object-cover" data-ai-hint="person portrait"/>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
