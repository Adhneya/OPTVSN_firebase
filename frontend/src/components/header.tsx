
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { mainNavLinks, loginLink } from "@/lib/data";
import { Input } from "./ui/input";
import ContactModal from "./contact-modal";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // mounted state ensures server and client have the same initial render.
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  
  // This useEffect only runs on the client, after the initial render.
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
          isScrolled ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center">
            {/* By checking for `mounted`, we ensure this block renders identically on server and client, preventing hydration errors. */}
            {mounted && (
                !isMobile && (
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {mainNavLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition-colors hover:text-primary text-foreground/60"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )
            )}
          </div>

          <div className="flex items-center justify-end">
             {mounted && (
                isMobile ? (
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                        <Menu />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                ) : (
                   loginLink && (
                     <Button asChild>
                       <Link href={loginLink.href}>{loginLink.label}</Link>
                     </Button>
                   )
                )
            )}
          </div>
        </div>
      </header>
      {mounted && isMobile && <HeaderModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} defaultSubject="Advisor Call Request" />
    </>
  );
}


function HeaderModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const allNavLinks = [...mainNavLinks, loginLink].filter(Boolean);
  return (
    <div
      className={`fixed inset-0 z-[100] bg-background text-foreground transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="container h-full mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo className="h-10 w-auto" />
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X />
            <span className="sr-only">Close Menu</span>
          </Button>
        </div>
        <div className="flex flex-col h-[calc(100%-4rem)] p-4">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search pages, programs..." className="pl-10" />
          </div>

          <nav className="flex flex-col items-start space-y-4 text-lg font-medium mb-8">
            {allNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="transition-colors hover:text-primary w-full py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase">Quick Actions</h3>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/programs" onClick={() => setIsOpen(false)}>
                <BookOpen className="mr-2" /> Pricing
              </Link>
            </Button>
            <Button asChild className="w-full justify-start">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Phone className="mr-2" /> Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
