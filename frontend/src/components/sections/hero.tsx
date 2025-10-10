"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb, Users, Target } from "lucide-react";
import { gsap } from "gsap";
import ContactModal from "../contact-modal";
import { FaCalendarAlt } from "react-icons/fa";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bulletRefs = useRef<HTMLDivElement[]>([]);
  const iconRefs = useRef<SVGSVGElement[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({ repeat: 0 });

    bulletRefs.current.forEach((el, i) => {
      const icon = iconRefs.current[i];

      // Animate bullet text
      tl.current!.fromTo(
        el,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        i * 1.2 // step timing
      );

      // Animate icon with slight offset
      if (icon) {
        tl.current!.fromTo(
          icon,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          i * 1.2 + 0.2 // sync slightly after text
        );
      }
    });
  }, []);

  return (
    <>
      <section id="home" className="relative bg-background overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-[calc(100vh-4rem)] py-16">
            {/* LEFT SECTION */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground tracking-tight">
                Go Beyond
                <br />
                Managing. Start
                <br />
                Leading.
              </h1>
              <p className="text-lg md:text-xl font-light text-muted-foreground max-w-lg">
                Transform your product career with expert-led coaching and
                mentorship. From landing your first PM role to stepping into
                product leadership — we give you the strategy, confidence, and
                tools to succeed.
              </p>

              <div className="flex gap-4 pt-2">
                <a
                  href="/programs"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 shadow-sm"
                >
                  🚀 Explore Programs
                </a>
                <a
                  href="https://topmate.io/aakanksha_sharma10/1335886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-[#1e87b1] hover:text-white transition"
                >
                  <FaCalendarAlt className="text-xl" />
                  Book Free Discovery Call
                </a>
              </div>
            </div>

            {/* RIGHT SECTION — WHY OPTVSN JOURNEY */}
            <div className="flex flex-col justify-start md:justify-center text-left md:text-right md:items-end space-y-8 md:space-y-10 mt-[-2rem]">
              <div className="md:mt-[-2rem]">
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2 leading-snug">
                  Why Product Managers Choose{" "}
                  <span className="text-primary">OPTVSN Journey?</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-sm md:ml-auto leading-relaxed">
                  Discover what makes OPTVSN the top choice for aspiring and
                  experienced Product Managers.
                </p>
              </div>

              <div className="flex flex-col text-muted-foreground md:ml-auto max-w-sm space-y-6">
                {/* Bullet 1 */}
                <div
                  ref={(el) => {
                    if (el) bulletRefs.current[0] = el;
                  }}
                  className="text-right space-y-1"
                >
                  <div className="flex items-center justify-end gap-2">
                    <h4 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                      LIVE Training
                    </h4>
                    <Lightbulb
                      ref={(el) => {
                        if (el) iconRefs.current[0] = el;
                      }}
                      className="h-5 w-5 text-primary flex-shrink-0"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                    Each program is led by accomplished leaders to give you the
                    best learning experience ever.
                  </p>
                </div>

                {/* Bullet 2 */}
                <div
                  ref={(el) => {
                    if (el) bulletRefs.current[1] = el;
                  }}
                  className="text-right space-y-1"
                >
                  <div className="flex items-center justify-end gap-2">
                    <h4 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                      1-on-1 Coaching
                    </h4>
                    <Users
                      ref={(el) => {
                        if (el) iconRefs.current[1] = el;
                      }}
                      className="h-5 w-5 text-primary flex-shrink-0"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                    We design balanced curricula for both individuals and
                    organizations to maximize impact.
                  </p>
                </div>

                {/* Bullet 3 */}
                <div
                  ref={(el) => {
                    if (el) bulletRefs.current[2] = el;
                  }}
                  className="text-right space-y-1"
                >
                  <div className="flex items-center justify-end gap-2">
                    <h4 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                      Personalized Journey
                    </h4>
                    <Target
                      ref={(el) => {
                        if (el) iconRefs.current[2] = el;
                      }}
                      className="h-5 w-5 text-primary flex-shrink-0"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                    We deliver actionable knowledge and techniques to accelerate
                    your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        defaultSubject="Advisor Call Request"
      />
    </>
  );
}
