
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Target, Building, Rocket, Zap, Phone, Map, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import ContactModal from '@/components/contact-modal';
import { testimonials } from '@/lib/data';

const serviceOfferings = [
  {
    icon: Target,
    title: "Product Leadership Coaching",
    description: "1:1 mentorship designed for aspiring and mid-career PMs to transition into leadership roles.",
    cta: { text: "Learn More", href: "/programs#complete-pm-package" }
  },
  {
    icon: Building,
    title: "Corporate Training Programs",
    description: "Custom 2-day workshops for organizations, designed to align teams and transform feature-factory thinking into strategic leadership.",
    cta: { text: "Learn More", href: "/programs#corporate-training" }
  },
  {
    icon: Rocket,
    title: "Career Transition Coaching",
    description: "Helping professionals from engineering, design, or business backgrounds break into product management with confidence.",
    cta: { text: "Learn More", href: "/programs#job-ready-pm-package" }
  },
  {
    icon: Zap,
    title: "Skill Accelerators & Bootcamps",
    description: "Focused modules on Agile, AI/ML PM concepts, case studies, and leadership drills to sharpen specific skills.",
    cta: { text: "Learn More", href: "/programs#technical-pm-training" }
  }
];

const whoWeHelp = [
    {
        title: "Aspiring Product Managers",
        headline: "Kickstart Your PM Career with Confidence",
        summary: "Transitioning to a PM role is as much about mindset as it is about skills. Learn how to think and act like a PM.",
        features: [
            "Mindset Shifts: Practice “wearing the PM hat” in real-world challenges.",
            "Core PM Principles: MVPs, trade-offs, frameworks.",
            "Job Preparation: Resume, interviews, and hands-on exercises.",
        ],
        offerings: "Individual PM 101 Training, 1-on-1 Mentorship, Hands-on Case Study"
    },
    {
        title: "Mid-Career PMs",
        headline: "Elevate from Tactical to Strategic PM",
        summary: "Move beyond execution and position yourself as a strategic leader.",
        features: [
            "Strategic Product Management: Drive vision, strategy, and impact.",
            "Executive-Level Pitching: Deliver compelling, data-driven pitches.",
            "Leadership Skills: Mentor, motivate teams, foster innovation.",
        ],
        offerings: "Individual PM Training, 1-on-1 Mentorship, Mock Interviews, Resume Review"
    },
    {
        title: "Corporate Teams",
        headline: "Empower Your Teams with PM Training",
        summary: "Hands-on, case study–driven training tailored for impact.",
        features: [
            "Hands-On Case Study: Solve real-world strategy, positioning, technical PM challenges.",
            "Customized Curriculum: Tailored to business goals and team needs.",
        ],
        offerings: "2-Day Onsite Corporate Training"
    }
];

const howItWorks = [
  { icon: Phone, title: "Discovery Call", description: "A free 15-min call to understand your goals." },
  { icon: Map, title: "Personalized Roadmap", description: "We craft a tailored plan to fit your specific needs." },
  { icon: Users, title: "Coaching / Workshops", description: "Engage in hands-on, expert-led sessions." },
  { icon: CheckCircle, title: "Career Success", description: "Achieve your goals and land your dream role." }
];

const differentiators = [
  "Mentorship from industry veterans (Microsoft, Visa, etc.)",
  "Hands-on, project-based training (not just theory)",
  "Flexible formats: 1:1, group, or corporate training",
  "Proven 95% success rate in career transitions"
];

const programTiers = [
    { name: "Starter", description: "For Aspiring PMs", href: "/programs#pm-launchpad-cohort" },
    { name: "Pro", description: "For Mid-Career PMs", href: "/programs#complete-pm-package" },
    { name: "Enterprise", description: "For Corporate Teams", href: "/programs#corporate-training" },
];

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const successStory1 = testimonials.find(t => t.name === "Ananya");
  const successStory2 = testimonials.find(t => t.company === "High-Growth Startup");


  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-16 sm:py-24 text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Transform Your Career. Elevate Your Team. Lead with Vision.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Our coaching and training programs are designed to help individuals and organizations unlock their full potential in Product Management.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto max-w-7xl px-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceOfferings.map((service) => (
                        <Card key={service.title} className="text-center card-hover">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="pt-4">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button asChild variant="link">
                                    <Link href={service.cta.href}>{service.cta.text}</Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                 </div>
            </div>
        </section>

        {/* Who We Help */}
        <section id="who-we-help" className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Who We Help</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {whoWeHelp.map(service => (
                        <Card key={service.title} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.headline}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                 <p className="text-sm text-muted-foreground mb-4">{service.summary}</p>
                                <ul className="space-y-2 mb-4">
                                    {service.features.map(feature => (
                                        <li key={feature} className="flex items-start text-sm">
                                            <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Offerings:</p>
                                 <p className="text-xs text-muted-foreground">{service.offerings}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-12">How It Works</h2>
            <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {howItWorks.map((step, index) => (
                        <div key={step.title} className="flex flex-col items-center p-4">
                            <div className="bg-background p-4 rounded-full border-2 border-primary mb-4 z-10">
                                <step.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-12">Why Choose OPTVSN Journey?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-3xl mx-auto">
                    {differentiators.map((text, index) => (
                        <div key={index} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <p className="text-lg text-muted-foreground">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Mini Success Stories */}
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-5xl px-4 space-y-16">
            {successStory1 && (
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <Image src={successStory1.avatar.imageUrl} alt={successStory1.name} width={100} height={100} data-ai-hint={successStory1.avatar.imageHint} className="rounded-full shadow-lg" />
                    <div>
                        <blockquote className="text-xl italic text-foreground">"I moved from a non-tech role to a Senior Product Leader in 3 months with OPTVSN coaching."</blockquote>
                        <p className="mt-2 font-semibold">{successStory1.name}, Senior PM @ {successStory1.company}</p>
                    </div>
                </div>
            )}
             {successStory2 && (
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 text-center md:text-right">
                    <Image src={successStory2.avatar.imageUrl} alt={successStory2.name} width={100} height={100} data-ai-hint={successStory2.avatar.imageHint} className="rounded-full shadow-lg" />
                    <div>
                        <blockquote className="text-xl italic text-foreground">“Our corporate team shifted from reactive development to strategic execution. The difference is night and day.”</blockquote>
                        <p className="mt-2 font-semibold">{successStory2.role}, {successStory2.company}</p>
                    </div>
                </div>
            )}
          </div>
        </section>

        {/* Program Preview */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-12">Find Your Program</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {programTiers.map(tier => (
                        <Card key={tier.name} className="card-hover">
                           <CardHeader>
                                <CardTitle>{tier.name}</CardTitle>
                                <p className="text-muted-foreground">{tier.description}</p>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                 <div className="mt-12">
                    <Button asChild size="lg">
                        <Link href="/programs">View Detailed Pricing</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 sm:py-24">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="bg-secondary rounded-lg p-8 md:p-12 text-center shadow-lg">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Not Sure Which Program is Right for You?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Talk to our advisors and get a personalized recommendation.</p>
                    <div className="mt-8">
                        <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)}>
                           💬 Book a Free Discovery Call
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} defaultSubject="Free Discovery Call" />
    </>
  );
}
