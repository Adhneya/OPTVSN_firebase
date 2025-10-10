"use client";

import { useState, useEffect, Suspense } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function StickyMicroCTAContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("micro-cta-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    sessionStorage.setItem("micro-cta-dismissed", "true");
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative animate-in fade-in slide-in-from-bottom duration-500">
        {/* WhatsApp button */}
        <a
          href="https://wa.me/447815482546?text=Hi, I'm interested in OPTVSN programs"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center pl-5 pr-10 py-6 rounded-full shadow-lg bg-white border border-[#25D366] text-[hsl(220,75%,16%)] hover:bg-[#0d2a63] transition-colors"
        >
          <FaWhatsapp className="mr-3 size-5 text-[hsl(220,75%,16%)] transition-colors group-hover:text-[#25D366]" />
          <span className="text-[hsl(220,75%,16%)] transition-colors group-hover:text-[#25D366]">
            Chat with us on WhatsApp
          </span>
        </a>

        {/* Dismiss button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1/2 -translate-y-1/2 right-1 h-8 w-8 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/20"
          onClick={handleDismiss}
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default function StickyMicroCTA() {
  return (
    <Suspense fallback={null}>
      <StickyMicroCTAContent />
    </Suspense>
  );
}
