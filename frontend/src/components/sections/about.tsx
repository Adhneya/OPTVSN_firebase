import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import { Briefcase, Gem, Users } from "lucide-react";
import { TrustStrip } from "./trust-strip";

const overviewMetrics = [
  { icon: Briefcase, label: "10+ Years of Experience" },
  { icon: Gem, label: "MAANG Background" },
  { icon: Users, label: "1000+ Professionals Mentored" },
];

export default function About() {
  const founder = teamMembers.find((m) => m.role.includes("CEO"));

  return (
    <>
      {/* ------------------ Hero Section ------------------ */}
      <section id="about-hero" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              About OPTVSN Journey
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
              We transform ambitious professionals into visionary product
              leaders.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------ Company Overview ------------------ */}
      <section id="company-overview" className="py-16 sm:py-24 bg-secondary">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            OPTVSN Journey (formerly known as Empower PM Journey) offers
            personalized, high-impact Product Management coaching and training
            to elevate your career. With over <strong>10+ years</strong> of
            Product Management experience at <strong>MAANG</strong> companies,
            we specialize in guiding aspiring PMs, mid-career professionals, and
            corporate teams.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our programs focus on essential mindset shifts, core PM principles,
            job preparation, strategic leadership, and tailored team training,
            enabling you to unlock your full potential in the PM field from
            anywhere in the world.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {overviewMetrics.map((metric) => (
              <div key={metric.label} className="flex flex-col items-center">
                <metric.icon className="h-10 w-10 text-primary mb-2" />
                <span className="font-semibold text-foreground">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ Meet the Team ------------------ */}
      <section id="team" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Meet the Team
            </h2>
            <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              The passionate minds behind OPTVSN — building, designing, and
              mentoring with purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="text-center border border-border/40 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center">
                  {/* ✅ Responsive Circular Image */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="relative rounded-full overflow-hidden shadow-lg 
                                  w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
                    >
                      <Image
                        src={member.image.imageUrl}
                        alt={`Photo of ${member.name}`}
                        fill
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                        data-ai-hint={member.image.imageHint}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* ✅ Text Styling */}
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                    {member.name}
                  </CardTitle>
                  <p className="text-primary font-medium text-sm sm:text-base mt-1">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ Founder Section ------------------ */}
      {founder && (
        <section id="social-proof" className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              Group PM @ Microsoft | 10+ Years Experience | Mentor to 1000+
              Professionals
            </h3>
            <blockquote className="mt-6 border-l-4 border-accent pl-4 italic text-lg text-muted-foreground text-left max-w-2xl mx-auto">
              “I’ve walked the path you’re on—from an aspiring PM to a product
              leader at a top tech company. OPTVSN Journey is the mentorship I
              wish I had—practical, strategic, and focused on real-world
              results.”
              <footer className="mt-4 not-italic font-semibold text-foreground">
                - Aakanksha Sharma, Founder & CEO
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* ------------------ Trust Strip ------------------ */}
      <TrustStrip />

      {/* ------------------ Closing CTA ------------------ */}
      <section id="closing-cta" className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-secondary rounded-lg p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Start Your PM Journey?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Take the next step in your career with OPTVSN’s personalized
              coaching and training.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
