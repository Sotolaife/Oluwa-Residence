import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from 'date-fns';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // A simple markdown to HTML-like converter
  const renderMarkdown = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold mt-6 mb-2">{line.substring(4)}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.substring(3)}</h2>;
        }
        if (line.startsWith('- ')) {
            return <li key={index} className="ml-6 list-disc">{line.substring(2)}</li>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        return <p key={index} className="mb-4">{line}</p>;
      })
  }

  return (
    <article>
        <header className="relative w-full h-[50vh] flex items-center justify-center text-center">
            <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint="article header"
                priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-white">
                <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
                    {post.title}
                </h1>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <Image src={post.author.avatarUrl} alt={post.author.name} width={48} height={48} className="rounded-full" />
                    <div>
                        <p className="font-semibold">{post.author.name}</p>
                        <p className="text-sm text-gray-300">{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</p>
                    </div>
                </div>
            </div>
        </header>

        <div className="container mx-auto px-4 md:px-6 my-12 md:my-16">
            <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-headline prose-a:text-primary">
                {renderMarkdown(post.content)}
            </div>
        </div>
    </article>
  );
}
