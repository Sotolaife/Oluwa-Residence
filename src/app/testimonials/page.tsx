import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Trusted by Homeowners</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our clients' satisfaction is the true measure of our success. Here's what they have to say about their experience with Oluwadara Residences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
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
  );
}
