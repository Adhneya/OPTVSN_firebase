import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; 
import Logo from "@/components/logo";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Your journey to empowerment starts here. Book a free discovery call today.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Formerly Empower PM Journey.
            </p>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <Link
                href="https://wa.me/447815482546"
                target="_blank"
                className="text-muted-foreground hover:text-[#25D366]" // WhatsApp green on hover
              >
                <FaWhatsapp className="h-6 w-6" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/optvsnjourney"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/optvsnjourney/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OPTVSN Journey PVT Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
