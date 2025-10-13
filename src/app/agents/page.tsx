import { agents } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function AgentsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Meet Our Expert Agents</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our team of dedicated professionals is here to guide you through every step of your real estate journey with expertise and care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <Card key={agent.id} className="text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={agent.avatarUrl}
              alt={agent.name}
              width={128}
              height={128}
              className="rounded-full mx-auto mb-4 border-4 border-primary"
              data-ai-hint="professional portrait"
            />
            <h2 className="text-2xl font-bold font-headline">{agent.name}</h2>
            <p className="text-primary font-semibold">{agent.title}</p>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <Link href={`tel:${agent.phone}`} className="flex items-center justify-center gap-2 hover:text-foreground">
                <Phone className="w-4 h-4" />
                <span>{agent.phone}</span>
              </Link>
              <Link href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 hover:text-foreground">
                <Mail className="w-4 h-4" />
                <span>{agent.email}</span>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
