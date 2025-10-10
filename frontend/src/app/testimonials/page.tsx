import Image from 'next/image';
import { testimonials, Story, CaseStudyStory } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import SuccessMetrics from '@/components/sections/success-metrics';
import TestimonialCaseStudy from '@/components/sections/testimonial-case-study';
import ClosingCta from '@/components/sections/closing-cta';
import { TrustStrip } from '@/components/sections/trust-strip';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

export default function TestimonialsPage() {
  const featuredTestimonial = testimonials.find(t => t.featured);
  const caseStudies = testimonials.filter(
    (t): t is CaseStudyStory => t.caseStudy === true
  );
  const otherTestimonials = testimonials.filter(
    (t: Story) => !t.featured && !t.caseStudy
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Trusted by Leaders, Loved by Learners
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Hear from professionals and organizations who transformed their
            careers with OPTVSN Journey.
          </p>
        </div>
      </section>

      {/* Trust Logos */}
      <TrustStrip />

      {/* Success Metrics */}
      <SuccessMetrics />

      {/* Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-center mb-12">
              From Our Community
            </h2>
            <Card className="shadow-2xl scale-105">
              <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                {featuredTestimonial.avatar && (
                  <Image
                    src={featuredTestimonial.avatar.imageUrl}
                    alt={`Photo of ${featuredTestimonial.name}`}
                    width={150}
                    height={150}
                    className="rounded-full object-cover shadow-lg"
                    data-ai-hint={featuredTestimonial.avatar.imageHint}
                  />
                )}
                <div className="text-center md:text-left">
                  <StarRating rating={featuredTestimonial.rating || 5} />
                  <blockquote className="mt-4 text-xl font-medium text-foreground">
                    “{featuredTestimonial.quote}”
                  </blockquote>
                  <footer className="mt-4">
                    <p className="font-semibold text-lg">
                      {featuredTestimonial.name}
                    </p>
                    <p className="text-muted-foreground">
                      {featuredTestimonial.role}
                      {featuredTestimonial.company &&
                        featuredTestimonial.company !== 'N/A' &&
                        ` @ ${featuredTestimonial.company}`}
                    </p>
                  </footer>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Mini Case Studies */}
      {caseStudies.length > 0 && (
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto max-w-7xl px-4 space-y-24">
            {caseStudies.map((story, index) => (
              <TestimonialCaseStudy key={index} story={story} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonial Grid */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-center mb-12">
            More Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherTestimonials.map((testimonial: Story, index: number) => (
              <Card key={index} className="flex flex-col card-hover">
                <CardContent className="flex-grow flex flex-col justify-between p-6">
                  <div>
                    <StarRating rating={testimonial.rating || 5} />
                    <blockquote className="mt-4 text-lg text-foreground">
                      “{testimonial.quote}”
                    </blockquote>
                  </div>
                  <div className="mt-6 flex items-center">
                    <Avatar className="h-12 w-12">
                      {testimonial.avatar && (
                        <Image
                          src={testimonial.avatar.imageUrl}
                          alt={`Avatar of ${testimonial.name}`}
                          width={48}
                          height={48}
                          data-ai-hint={testimonial.avatar.imageHint}
                        />
                      )}
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                        {testimonial.company &&
                          testimonial.company !== 'N/A' &&
                          ` @ ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCta />
    </main>
  );
}
