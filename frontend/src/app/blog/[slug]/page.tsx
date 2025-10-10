import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const author = teamMembers.find((member) => member.name === post.author);

  return (
    <article className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex justify-center items-center gap-4 text-muted-foreground">
            {author && (
                <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                        <Image src={author.image.imageUrl} alt={`Photo of ${author.name}`} width={32} height={32} data-ai-hint={author.image.imageHint} className="object-cover" />
                        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{author.name}</span>
                </div>
            )}
            <span className="hidden sm:inline">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </header>

        <div className="mb-12">
          <Image
            src={post.image.imageUrl}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full rounded-lg shadow-lg aspect-video object-cover"
            data-ai-hint={post.image.imageHint}
            priority
          />
        </div>

        <div
          className="prose prose-lg dark:prose-invert mx-auto max-w-none 
                     prose-p:text-muted-foreground prose-headings:text-foreground 
                     prose-a:text-primary hover:prose-a:text-primary/80
                     prose-strong:text-foreground
                     prose-ul:list-disc prose-ul:pl-6 prose-li:text-muted-foreground
                     prose-ol:list-decimal prose-ol:pl-6 prose-li:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
