import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Story = {
    quote: string;
    name: string;
    role: string;
    company: string;
    avatar: {
        imageUrl: string;
        imageHint: string;
    };
    before: string;
    after: string;
}

type TestimonialCaseStudyProps = {
  story: Story;
};

export default function TestimonialCaseStudy({ story }: TestimonialCaseStudyProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={story.avatar.imageUrl}
          alt={`Photo of ${story.name}`}
          layout="fill"
          objectFit="cover"
          className="bg-muted"
          data-ai-hint={story.avatar.imageHint}
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold tracking-tight text-primary">
          From {story.before} to {story.after}
        </h3>
        <blockquote className="mt-4 border-l-4 border-accent pl-4 text-lg italic text-muted-foreground">
            "{story.quote}"
        </blockquote>
        <div className="mt-6">
            <p className="font-semibold text-lg">{story.name}</p>
            <p className="text-muted-foreground">{story.role}{story.company && story.company !== 'N/A' && ` @ ${story.company}`}</p>
        </div>
      </div>
    </div>
  );
}
