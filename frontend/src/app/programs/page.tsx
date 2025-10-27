"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { pricingPlans } from "@/lib/data";
import PricingCard from "@/components/pricing-card";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/contact-modal";
import {
  FaWhatsapp,
  FaBox,
  FaServicestack,
  FaUniversity,
} from "react-icons/fa";

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {/* HERO */}
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

        {/* CATEGORIES */}
        <section className="relative py-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="relative container mx-auto max-w-4xl px-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Packages",
                  count: categorizedPlans.packages.length,
                  icon: FaBox,
                  color: "blue",
                },
                {
                  title: "Services",
                  count: categorizedPlans.services.length,
                  icon: FaServicestack,
                  color: "teal",
                },
                {
                  title: "Institutions",
                  count: categorizedPlans.institutions.length,
                  icon: FaUniversity,
                  color: "purple",
                },
              ].map(({ title, count, icon: Icon, color }, i) => (
                <Link
                  key={i}
                  href={`#${title.toLowerCase()}`}
                  className={`group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/70 backdrop-blur-md p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  <div
                    className={`rounded-full p-4 bg-gradient-to-br from-${color}-500/10 text-${color}-600 transition-all duration-300`}
                  >
                    <Icon className={`text-4xl text-${color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {count} programs
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING GRID */}
        <section id="pricing-grid" className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 space-y-20">
            {/* PACKAGES */}
            <div id="packages" className="scroll-mt-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <FaBox className="text-blue-600" />
                <h2 className="text-2xl font-semibold text-blue-600">
                  Packages
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedPlans.packages.map((plan, i) => (
                  <PricingCard key={`pkg-${i}`} plan={plan} />
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div id="services" className="scroll-mt-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-xl bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
                <FaServicestack className="text-teal-600" />
                <h2 className="text-2xl font-semibold text-teal-600">
                  Services
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedPlans.services.map((plan, i) => (
                  <PricingCard key={`srv-${i}`} plan={plan} />
                ))}
              </div>
            </div>

            {/* INSTITUTIONS */}
            <div id="institutions" className="scroll-mt-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                <FaUniversity className="text-purple-600" />
                <h2 className="text-2xl font-semibold text-purple-600">
                  Institutions
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedPlans.institutions.map((plan, i) => (
                  <PricingCard key={`inst-${i}`} plan={plan} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">
              Compare Our Programs
            </h2>

            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full border-collapse text-sm text-gray-700">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">
                      Features
                    </th>
                    {[
                      "All-in-One PM Transformation",
                      "PM Career Foundation",
                      "PM Real World Mastery",
                      "PM 1:1 Mentorship",
                      "PM Try & Buy",
                      "Job-Ready Package",
                      "Strategic PM Training",
                      "Technical PM Training",
                      "Becoming an AI PM",
                      "PM Case Study Practice",
                    ].map((name, i) => (
                      <th
                        key={i}
                        className="px-6 py-4 text-left font-medium text-gray-800 whitespace-nowrap"
                      >
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Program Name
                    </td>
                    {[
                      "All-in-One PM Transformation",
                      "PM Career Foundation",
                      "PM Real World Mastery",
                      "PM 1:1 Mentorship",
                      "PM Try & Buy",
                      "Job-Ready Package",
                      "Strategic PM Training",
                      "Technical PM Training",
                      "Becoming an AI PM",
                      "PM Case Study Practice",
                    ].map((name, i) => (
                      <td key={i} className="px-6 py-4">
                        {name}
                      </td>
                    ))}
                  </tr>

                  {/* 🟢 Type Row with Icons */}
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Type
                    </td>
                    {[0, 1, 2].map((i) => (
                      <td key={i} className="px-6 py-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 font-medium">
                          <FaBox className="text-blue-500" />
                          Package
                        </div>
                      </td>
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                      <td key={i} className="px-6 py-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-600 font-medium">
                          <FaServicestack className="text-teal-500" />
                          Service
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Other rows (Duration, Price, etc.) unchanged */}
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Duration
                    </td>
                    <td className="px-6 py-4">17–21 weeks</td>
                    <td className="px-6 py-4">10–13 weeks</td>
                    <td className="px-6 py-4">13–16 weeks</td>
                    <td className="px-6 py-4">1 hour</td>
                    <td className="px-6 py-4">3 weeks</td>
                    <td className="px-6 py-4">4 weeks</td>
                    <td className="px-6 py-4">8 weeks</td>
                    <td className="px-6 py-4">6 weeks</td>
                    <td className="px-6 py-4">8 weeks</td>
                    <td className="px-6 py-4">2 sessions</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Starting Price
                    </td>
                    {[
                      "₹49,999",
                      "₹29,999",
                      "₹39,999",
                      "₹1,499",
                      "₹9,999",
                      "₹10,999",
                      "₹14,999",
                      "₹5,999",
                      "₹12,999",
                      "₹5,497",
                    ].map((price, i) => (
                      <td
                        key={i}
                        className="px-6 py-4 font-semibold text-green-600"
                      >
                        {price}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Ideal For
                    </td>
                    <td className="px-6 py-4">
                      Ambitious PMs seeking AI-ready leadership roles
                    </td>
                    <td className="px-6 py-4">
                      Aspiring PMs or career switchers
                    </td>
                    <td className="px-6 py-4">
                      PMs seeking corporate-level validation
                    </td>
                    <td className="px-6 py-4">Quick expert advice seekers</td>
                    <td className="px-6 py-4">PMs testing real project work</td>
                    <td className="px-6 py-4">
                      Job-ready PMs preparing portfolios
                    </td>
                    <td className="px-6 py-4">
                      Leaders aiming for strategic roles
                    </td>
                    <td className="px-6 py-4">
                      PMs focusing on technical skills
                    </td>
                    <td className="px-6 py-4">
                      PMs specializing in AI/ML products
                    </td>
                    <td className="px-6 py-4">
                      PMs preparing for case interviews
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Key Outcome
                    </td>
                    <td className="px-6 py-4">
                      AI-ready PM, leadership readiness
                    </td>
                    <td className="px-6 py-4">
                      Full PM toolkit, job-ready portfolio
                    </td>
                    <td className="px-6 py-4">
                      Corporate experience, certification
                    </td>
                    <td className="px-6 py-4">Personal mentorship & clarity</td>
                    <td className="px-6 py-4">Hands-on exposure</td>
                    <td className="px-6 py-4">
                      Resume, case prep, and interview ready
                    </td>
                    <td className="px-6 py-4">
                      Strategic thinking and OKRs mastery
                    </td>
                    <td className="px-6 py-4">
                      Technical execution & Agile tools
                    </td>
                    <td className="px-6 py-4">
                      AI PM skills and future-proof profile
                    </td>
                    <td className="px-6 py-4">
                      Solved cases & frameworks mastery
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center mt-12 space-y-6">
            {/* Packages Section */}
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 shadow-sm inline-flex items-start gap-3">
              <FaBox className="text-blue-600 dark:text-blue-400 text-2xl flex-shrink-0 mt-1" />
              <span className="text-left">
                <span className="font-semibold">
                  Choose a{" "}
                  <span className="text-blue-700 dark:text-blue-300">
                    PACKAGE
                  </span>{" "}
                  if:
                </span>
                <br />
                You want a{" "}
                <span className="font-medium">
                  complete transformation (12–21 weeks)
                </span>
                , a structured learning path, and comprehensive support from
                start to finish.
              </span>
            </p>

            {/* Services Section */}
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-xl p-6 shadow-sm inline-flex items-start gap-3">
              <FaServicestack className="text-teal-600 dark:text-teal-400 text-2xl flex-shrink-0 mt-1" />
              <span className="text-left">
                <span className="font-semibold">
                  Choose a{" "}
                  <span className="text-teal-700 dark:text-teal-300">
                    SERVICE
                  </span>{" "}
                  if:
                </span>
                <br />
                You need focused learning on specific skills, have limited time
                (1–8 weeks), want to test before committing, or combine multiple
                services.
              </span>
            </p>
          </div>
        </section>

        {/* CTA */}
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
