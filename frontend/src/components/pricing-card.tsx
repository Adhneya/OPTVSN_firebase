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
  return (
    <>
      <Card
        className="flex flex-col card-hover"
        id={plan.name.toLowerCase().replace(/ /g, "-")}
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
          <Button
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link
              href={`/contact?plan=${encodeURIComponent(
                plan.name
              )}&intent=enroll`}
            >
              {plan.cta}
            </Link>
          </Button>
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
        </CardFooter>
      </Card>
    </>
  );
}
