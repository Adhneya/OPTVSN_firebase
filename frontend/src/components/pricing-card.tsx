"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { pricingPlans } from "@/lib/data";

type PricingCardProps = {
  plan: (typeof pricingPlans)[0];
};

export default function PricingCard({ plan }: PricingCardProps) {
  // Detect color theme based on plan type
  const type = plan.type?.toLowerCase();
  let shadowClass = "shadow-[0_4px_14px_rgba(0,0,0,0.08)]"; // default neutral
  let hoverShadow = "hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]";
  let borderClass = "border-border";

  switch (type) {
    case "package":
      shadowClass = "shadow-[0_4px_14px_rgba(59,130,246,0.15)]"; // blue
      hoverShadow = "hover:shadow-[0_6px_20px_rgba(59,130,246,0.25)]";
      borderClass = "border-blue-500/20";
      break;
    case "service":
      shadowClass = "shadow-[0_4px_14px_rgba(20,184,166,0.15)]"; // teal
      hoverShadow = "hover:shadow-[0_6px_20px_rgba(20,184,166,0.25)]";
      borderClass = "border-teal-500/20";
      break;
    case "institution":
      shadowClass = "shadow-[0_4px_14px_rgba(168,85,247,0.15)]"; // purple
      hoverShadow = "hover:shadow-[0_6px_20px_rgga(168,85,247,0.25)]";
      borderClass = "border-purple-500/20";
      break;
  }

  const isMentorship = plan.name.toLowerCase().includes("mentorship");

  return (
    <Card
      id={plan.name.toLowerCase().replace(/ /g, "-")}
      className={`flex flex-col transition-all duration-300 
                  bg-card/70 backdrop-blur-sm border ${borderClass}
                  ${shadowClass} ${hoverShadow} hover:-translate-y-1`}
    >
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>

        <div className="flex flex-wrap gap-x-2 text-muted-foreground text-sm">
          {plan.prices.inr && <span>🇮🇳 {plan.prices.inr}</span>}
          {plan.prices.usd && <span>🇺🇸 {plan.prices.usd}</span>}
          {plan.prices.gbp && <span>🇬🇧 {plan.prices.gbp}</span>}
          {plan.prices.eur && <span>🇪🇺 {plan.prices.eur}</span>}
        </div>

        <CardDescription className="italic">"{plan.tagline}"</CardDescription>

        {plan.ideal_for && (
          <p className="text-sm font-semibold text-primary pt-2">
            {plan.ideal_for}
          </p>
        )}
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2">Key Highlights:</h4>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <Check className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="flex-col items-stretch space-y-2">
        {isMentorship ? (
          <>
            {/* ✅ Book a Session Button (for PM Mentorship only) */}
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a
                href="https://topmate.io/aakanksha_sharma10/1335877"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Session
              </a>
            </Button>

            {/* ✅ Contact for More Clarity (WhatsApp) */}
            <Button asChild variant="outline" className="w-full">
              <a
                href={`https://wa.me/447815482546?text=Hi, I'm interested in the PM 1:1 Mentorship program`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact for more clarity
              </a>
            </Button>
          </>
        ) : (
          <>
            {/* 🧩 Default Plan CTA */}
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link
                href={`/contact?plan=${encodeURIComponent(plan.name)}&intent=enroll`}
              >
                {plan.cta}
              </Link>
            </Button>

            {/* 🧩 Default Contact Button */}
            <Button asChild variant="outline" className="w-full">
              <a
                href={`https://wa.me/447815482546?text=Hi, I'm interested in OPTVSN programs ${encodeURIComponent(
                  plan.name
                )} plan`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact for more clarity
              </a>
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
