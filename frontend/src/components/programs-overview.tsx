
import Link from "next/link";
import { pricingPlans } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProgramsOverview() {
  const overviewPrograms = pricingPlans.filter(p => ['PM End-to-End Transformation Package', 'Job Ready PM Package', 'Strategic PM Training', 'Technical PM Training', 'PM Launchpad Cohort', 'Corporate Training'].includes(p.name));

  return (
    <section id="programs-overview" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Programs</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Find the perfect program to accelerate your product management career.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {overviewPrograms.map((program) => (
            <Card key={program.name} className="flex flex-col card-hover">
              <CardHeader>
                <CardTitle>{program.name}</CardTitle>
                <CardDescription className="italic">"{program.tagline}"</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* You can add a key feature here if needed */}
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={`/programs#${program.name.toLowerCase().replace(/ /g, '-')}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button size="lg" asChild>
                <Link href="/programs">View All Programs</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
