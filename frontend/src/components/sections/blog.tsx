import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">From the Blog</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Insights and articles on product management, career growth, and industry trends.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
              <Link href={`/blog/${post.slug}`} className="block">
                <Image
                  src={post.image.imageUrl}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={post.image.imageHint}
                />
              </Link>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground pt-2">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
