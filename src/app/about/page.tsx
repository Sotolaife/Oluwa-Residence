import Image from 'next/image';
import { placeholderImages } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Award, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  const teamImage = placeholderImages['about-team'];

  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-accent text-accent-foreground mb-4">Our Story</Badge>
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The Gold Standard in Luxury Real Estate
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Founded on the principles of integrity, transparency, and unparalleled service, Oluwadara Residences has been a cornerstone of the luxury real estate market for over a decade. We are more than just agents; we are advisors, partners, and neighbors dedicated to helping you find not just a house, but a place of lasting comfort.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our curated portfolio of exceptional properties is matched only by our commitment to our clients. We leverage deep market knowledge, innovative technology, and a vast network to ensure a seamless and rewarding experience, whether you are buying, selling, or investing.
            </p>
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
            {teamImage &&
              <Image
                src={teamImage.imageUrl}
                alt={teamImage.description}
                fill
                className="object-cover"
                data-ai-hint={teamImage.imageHint}
              />
            }
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
                <div className="inline-block p-4 bg-primary/10 rounded-full">
                    <Award className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-2xl font-headline font-bold">Excellence</h3>
                <p className="text-muted-foreground">We are committed to exceeding expectations and delivering exceptional results in every transaction.</p>
            </div>
            <div className="space-y-4">
                <div className="inline-block p-4 bg-primary/10 rounded-full">
                    <Target className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-2xl font-headline font-bold">Our Mission</h3>
                <p className="text-muted-foreground">To provide a seamless and luxurious real estate experience built on integrity, expertise, and personalized service.</p>
            </div>
            <div className="space-y-4">
                <div className="inline-block p-4 bg-primary/10 rounded-full">
                    <Eye className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-2xl font-headline font-bold">Our Vision</h3>
                <p className="text-muted-foreground">To be the most trusted and respected luxury real estate firm, known for creating lasting value for our clients and communities.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
