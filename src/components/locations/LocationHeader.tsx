"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { siteConfigV2 } from "@/lib/site-data-v2";
import { AreasMegaMenuDesktop, AreasMegaMenuMobile } from "@/components/AreasMegaMenu";

export default function LocationHeader({ currentSlug }: { currentSlug?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const telHref = `tel:${siteConfigV2.phone.replace(/\s/g, "")}`;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-primary shadow-[0_1px_8px_rgba(0,0,0,0.12)]">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            alt={`${siteConfigV2.name} Logo`}
            src={siteConfigV2.logo}
            width={siteConfigV2.logoWidth}
            height={siteConfigV2.logoHeight}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="hidden sm:inline-block text-lg font-semibold text-white tracking-tight">
            Direct Tyre Solutions
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <AreasMegaMenuDesktop
            currentSlug={currentSlug}
            phone={siteConfigV2.phone}
            label="Areas"
            triggerClassName="text-sm font-semibold text-white/70 hover:text-white transition-colors"
          />

          <Link
            href="/#contact"
            className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={telHref}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-dark text-white hover:bg-secondary transition-colors hover:text-primary"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/15 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-hover">24/7 LIVE</span>
            <span className="text-sm font-bold text-white">{siteConfigV2.phone}</span>
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-secondary text-primary hover:bg-secondary-hover transition-colors text-sm font-semibold shadow-sm"
          >
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          className="xl:hidden text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="xl:hidden border-t border-white/10 bg-primary max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 text-sm font-semibold text-white/80"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <AreasMegaMenuMobile currentSlug={currentSlug} onNavigate={() => setMenuOpen(false)} />
            <Link
              href="/#contact"
              className="py-2 text-sm font-semibold text-white/80"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 px-6 py-3 mt-3 bg-secondary text-primary font-bold rounded-full"
            >
              <PhoneCall className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              {siteConfigV2.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
