import { posts } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">From Our Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights, trends, and inspiration from the world of luxury real estate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card">
            <Link href={`/blog/${post.slug}`} className="block">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={800}
                height={600}
                className="w-full h-60 object-cover"
                data-ai-hint="real estate article"
              />
              <CardContent className="p-6">
                <p className="text-sm text-primary mb-2">{post.tags.join(", ")}</p>
                <h2 className="text-2xl font-bold font-headline mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.summary}</p>
                <div className="flex items-center text-accent font-semibold">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
