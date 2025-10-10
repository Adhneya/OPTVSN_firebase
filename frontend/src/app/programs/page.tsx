"use client";

import { useState } from "react";
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
import { FaWhatsapp } from "react-icons/fa";

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

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="mt-8 flex justify-center gap-4">
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

        {/* Pricing Grid Section */}
        <section id="pricing-grid" className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
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
