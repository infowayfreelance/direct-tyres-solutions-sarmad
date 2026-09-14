"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, PhoneCall } from "lucide-react";
import { locationAreasByRegion } from "@/lib/locations-data";

type AreasMegaMenuProps = {
  currentSlug?: string;
  phone: string;
  triggerClassName?: string;
  label?: string;
};

export function AreasMegaMenuDesktop({
  currentSlug,
  phone,
  triggerClassName = "text-sm font-semibold text-gray-300 hover:text-white transition-colors",
  label = "Areas We Cover",
}: AreasMegaMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const telHref = `tel:${phone.replace(/\s/g, "")}`;

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1 cursor-pointer ${triggerClassName}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(true)}
      >
        <span>{label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 z-50">
          <div className="w-[min(92vw,760px)] bg-primary-dark border border-white/10 rounded-2xl shadow-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {locationAreasByRegion.map((group) => (
                <div key={group.region}>
                  <h3 className="text-secondary text-[11px] font-bold uppercase tracking-[0.1em] mb-3">
                    {group.region}
                  </h3>
                  <ul className="space-y-1">
                    {group.areas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={area.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-2 py-1.5 px-2 -mx-2 rounded-lg text-sm transition-colors hover:bg-white/5 ${
                            area.slug === currentSlug
                              ? "text-white font-bold"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          <MapPin className="h-3.5 w-3.5 text-secondary-hover shrink-0" />
                          {area.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                Don&rsquo;t see your area? We cover all of Greater Manchester &amp; beyond.
              </p>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-primary font-bold text-sm shadow-md hover:bg-secondary-hover transition-colors shrink-0"
              >
                <PhoneCall className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                Call {phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function AreasMegaMenuMobile({
  currentSlug,
  onNavigate,
}: {
  currentSlug?: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="w-full flex items-center justify-between py-2 text-sm font-semibold text-white/80"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        Areas We Cover
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-3 pb-2 space-y-4">
          {locationAreasByRegion.map((group) => (
            <div key={group.region}>
              <div className="text-secondary text-[11px] font-bold uppercase tracking-[0.1em] py-1">
                {group.region}
              </div>
              <div className="space-y-1">
                {group.areas.map((area) => (
                  <Link
                    key={area.slug}
                    href={area.href}
                    className={`block py-1.5 text-sm font-medium ${
                      area.slug === currentSlug ? "text-white font-bold" : "text-white/70"
                    }`}
                    onClick={onNavigate}
                  >
                    {area.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
