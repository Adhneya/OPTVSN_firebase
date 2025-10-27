"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { pricingPlans } from "@/lib/data";
import PricingCard from "@/components/pricing-card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, Minus } from "lucide-react";
import ContactModal from "@/components/contact-modal";

// 🧩 React Icons
import {
  FaWhatsapp,
  FaBox,
  FaServicestack,
  FaUniversity,
} from "react-icons/fa";

const comparisonFeatures = [
  { feature: "Duration", key: "duration" },
  { feature: "1-on-1 Sessions", key: "sessions" },
  { feature: "Resume & LinkedIn Help", key: "resume_linkedin" },
  { feature: "Case Studies", key: "case_studies" },
  { feature: "Portfolio Creation", key: "portfolio" },
  { feature: "Mock Interviews", key: "mock_interviews" },
  { feature: "Group/Cohort", key: "group_cohort" },
  { feature: "Corporate", key: "corporate" },
];

// 🧱 CategoryTile Component
function CategoryTile({
  title,
  count,
  href,
  icon: Icon,
  color,
}: {
  title: string;
  count: number;
  href: string;
  icon: React.ElementType;
  color: string; // e.g. "primary", "teal", "purple"
}) {
  const colorMap: Record<string, string> = {
    primary: "from-blue-500/10 text-blue-600 hover:bg-blue-500/10",
    teal: "from-teal-500/10 text-teal-600 hover:bg-teal-500/10",
    purple: "from-purple-500/10 text-purple-600 hover:bg-purple-500/10",
  };

  const style = colorMap[color] || colorMap.primary;

  return (
    <Link
      href={href}
      className={`group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border 
                 bg-card/70 backdrop-blur-md p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 
                 transition-all duration-300 hover:bg-card/90`}
    >
      <div
        className={`rounded-full p-4 bg-gradient-to-br ${style} transition-all duration-300`}
      >
        <Icon
          className={`text-4xl group-hover:scale-110 transition-transform duration-300 ${
            color === "teal"
              ? "text-teal-600"
              : color === "purple"
              ? "text-purple-600"
              : "text-blue-600"
          }`}
        />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{count} programs</p>
    </Link>
  );
}

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Categorize plans
  const categorizedPlans = useMemo(() => {
    const toType = (t?: string) => (t ? t.toLowerCase() : "");
    return {
      packages: pricingPlans.filter((p) => toType(p.type) === "package"),
      services: pricingPlans.filter((p) => toType(p.type) === "service"),
      institutions: pricingPlans.filter(
        (p) => toType(p.type) === "institution"
      ),
    };
  }, []);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative bg-background">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto max-w-7xl px-4 py-16 sm:py-24 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Tailored Pricing Plans
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              You Are Making The Right Choice — Explore Our Offers and Choose
              Your Path to Product Management Success.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link href="#pricing-grid">Enroll Now</Link>
              </Button>
              <a
                href="https://wa.me/447815482546?text=Hi, I'm interested in OPTVSN programs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-[#25D366] hover:text-white transition">
                  <FaWhatsapp className="text-xl" />
                  Chat with us on WhatsApp
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Category Row */}
        <section className="relative py-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

          <div className="relative container mx-auto max-w-4xl px-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <CategoryTile
                title="Packages"
                count={categorizedPlans.packages.length}
                href="#packages"
                icon={FaBox}
                color="primary"
              />
              <CategoryTile
                title="Services"
                count={categorizedPlans.services.length}
                href="#services"
                icon={FaServicestack}
                color="teal"
              />
              <CategoryTile
                title="Institutions"
                count={categorizedPlans.institutions.length}
                href="#institutions"
                icon={FaUniversity}
                color="purple"
              />
            </div>
          </div>
        </section>

        {/* Grouped Pricing Sections */}
        <section id="pricing-grid" className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 space-y-20">
            {/* Packages */}
            <div id="packages" className="scroll-mt-28">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-xl
                bg-blue-500/10 dark:bg-blue-500/20
                border border-blue-500/20 backdrop-blur-sm
                shadow-[var(--elev-1)] transition"
              >
                <FaBox className="text-blue-600" />
                <h2 className="text-2xl font-semibold text-blue-600">
                  Packages
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedPlans.packages.map((plan, index) => (
                  <PricingCard key={`pkg-${index}`} plan={plan} />
                ))}
              </div>
            </div>

            {/* Services */}
            <div id="services" className="scroll-mt-28">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-xl
                              bg-teal-500/10 dark:bg-teal-500/20
                              border border-teal-500/20 backdrop-blur-sm
                              shadow-[var(--elev-1)] transition"
              >
                <FaServicestack className="text-teal-600" />
                <h2 className="text-2xl font-semibold text-teal-600">
                  Services
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedPlans.services.map((plan, index) => (
                  <PricingCard key={`srv-${index}`} plan={plan} />
                ))}
              </div>
            </div>

            {/* Institutions */}
            <div id="institutions" className="scroll-mt-28">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-xl
                              bg-purple-500/10 dark:bg-purple-500/20
                              border border-purple-500/20 backdrop-blur-sm
                              shadow-[var(--elev-1)] transition"
              >
                <FaUniversity className="text-purple-600" />
                <h2 className="text-2xl font-semibold text-purple-600">
                  Institutions
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedPlans.institutions.map((plan, index) => (
                  <PricingCard key={`inst-${index}`} plan={plan} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Compare Our Programs
              </h2>
            </div>
            <div className="w-full overflow-x-auto">
              <Table className="min-w-max">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Features</TableHead>
                    {pricingPlans.map((plan) => (
                      <TableHead key={plan.name}>{plan.name}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonFeatures.map(({ feature, key }) => (
                    <TableRow key={feature}>
                      <TableCell className="font-medium">{feature}</TableCell>
                      {pricingPlans.map((plan) => (
                        <TableCell key={plan.name}>
                          {plan.comparison[
                            key as keyof typeof plan.comparison
                          ] === true ? (
                            <Check className="text-green-500" />
                          ) : plan.comparison[
                              key as keyof typeof plan.comparison
                            ] === false ? (
                            <Minus className="text-muted-foreground" />
                          ) : (
                            plan.comparison[key as keyof typeof plan.comparison]
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl px-4 py-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Take the Next Step in Your PM Career?
            </h2>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link href="#pricing-grid">Enroll Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <ContactModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        defaultSubject="Advisor Call Request"
      />
    </>
  );
}
