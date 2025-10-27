"use client";

import Link from "next/link";
import { FaBox, FaServicestack, FaUniversity } from "react-icons/fa";
import { pricingPlans } from "@/lib/data";

export default function ProgramsOverview() {
  // Color map for consistent tone sharing
  const colorMap = {
    package: {
      gradient: "from-blue-500/10 to-blue-500/5",
      text: "text-blue-600",
    },
    service: {
      gradient: "from-teal-500/10 to-teal-500/5",
      text: "text-teal-600",
    },
    institution: {
      gradient: "from-purple-500/10 to-purple-500/5",
      text: "text-purple-600",
    },
  };

  // Select specific top programs
  const topPrograms = [
    {
      name: "All-in-One PM Transformation",
      category: "package",
      color: colorMap.package,
    },
    {
      name: "PM 1:1 Mentorship",
      category: "service",
      color: colorMap.service,
    },
    {
      name: "Corporate Training",
      category: "institution",
      color: colorMap.institution,
    },
  ];

  return (
    <section
      id="programs-overview"
      className="py-12 sm:py-16 bg-background relative"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

      <div className="relative container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Program Overview
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-muted-foreground">
            Explore our key categories — Packages, Services, and Institutions.
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-12">
          {[
            {
              title: "Packages",
              icon: FaBox,
              color: "blue",
              href: "/programs#packages",
            },
            {
              title: "Services",
              icon: FaServicestack,
              color: "teal",
              href: "/programs#services",
            },
            {
              title: "Institutions",
              icon: FaUniversity,
              color: "purple",
              href: "/programs#institutions",
            },
          ].map(({ title, icon: Icon, color, href }, i) => (
            <Link
              key={i}
              href={href}
              className={`group flex flex-col items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-${color}-500/10 to-${color}-500/5 backdrop-blur-md p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
            >
              <div
                className={`rounded-full p-3 bg-gradient-to-br from-${color}-500/20 to-${color}-500/10 text-${color}-600 group-hover:scale-105 transition-transform duration-300`}
              >
                <Icon className={`text-3xl text-${color}-600`} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </Link>
          ))}
        </div>

        {/* TOP PROGRAMS - With Category Colors */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topPrograms.map((program) => (
            <div
              key={program.name}
              className={`rounded-xl bg-gradient-to-br ${program.color.gradient} p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 backdrop-blur-md`}
            >
              <h4 className="text-lg font-semibold">{program.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">
                {pricingPlans.find((p) => p.name === program.name)?.description ??
                  "Discover how this program can accelerate your PM journey."}
              </p>
              <Link
                href={`/programs#${program.category}`}
                className={`${program.color.text} text-sm mt-3 inline-block font-medium hover:underline`}
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* View all programs */}
        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="inline-block text-primary font-medium hover:underline"
          >
            View All Programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
