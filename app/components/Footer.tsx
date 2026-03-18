import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Plant Engineering", href: "/services/plant-engineering" },
  { label: "Structural Engineering", href: "/services/structural-engineering" },
  { label: "BIM Engineering", href: "/services/bim-engineering" },
  { label: "Architectural Design", href: "/services/architectural-design" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#061829] pt-16 md:pt-24 pb-8">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 md:pb-16 border-b border-white/[0.05]">
          {/* Brand + tagline */}
          <AnimateOnScroll direction="up" className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-white.svg"
                alt="Liberty Innovations Inc"
                width={150}
                height={33}
                className="h-[28px] w-auto transition-opacity duration-200 hover:opacity-80"
              />
            </div>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-white/30 leading-[1.8] mb-8 max-w-[238px]">
              Engineering precision for plant owners, EPC companies, and
              contractors across North America. A subsidiary of Liberty Steel.
            </p>
            <a
              href="tel:2265265336"
              className="flex items-center gap-2.5 font-[family-name:var(--font-inter)] font-medium text-[13.5px] text-white/40 hover:text-white/60 transition-colors group"
            >
              <Phone size={13} strokeWidth={1.75} className="transition-transform duration-300 group-hover:rotate-12" />
              226-526-5336
            </a>
          </AnimateOnScroll>

          {/* Services */}
          <AnimateOnScroll direction="up" delay={80}>
            <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11px] text-white/50 tracking-[1.54px] uppercase mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              {serviceLinks.map((link, i) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/30 hover:text-white/60 transition-colors leading-[1.5] hover:translate-x-0.5 inline-block duration-200"
                    style={{ transitionDelay: `${i * 20}ms` }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          {/* Company */}
          <AnimateOnScroll direction="up" delay={160}>
            <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11px] text-white/50 tracking-[1.54px] uppercase mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/30 hover:text-white/60 transition-colors hover:translate-x-0.5 inline-block duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          {/* Contact */}
          <AnimateOnScroll direction="up" delay={240}>
            <h4 className="font-[family-name:var(--font-inter)] font-semibold text-[11px] text-white/50 tracking-[1.54px] uppercase mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:Info@libertyinnovation.com"
                  className="flex items-center gap-3 font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/30 hover:text-white/60 transition-colors group"
                >
                  <Mail size={14} strokeWidth={1.75} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  Info@libertyinnovation.com
                </a>
              </li>
              <li>
                <a
                  href="tel:2265265336"
                  className="flex items-center gap-3 font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/30 hover:text-white/60 transition-colors group"
                >
                  <Phone size={14} strokeWidth={1.75} className="shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  226-526-5336
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/30">
                  <MapPin size={14} strokeWidth={1.75} className="shrink-0 mt-0.5" />
                  6565 N McArthur Blvd, Suite 225<br />Irving, TX 75039
                </div>
              </li>
            </ul>
          </AnimateOnScroll>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] font-normal text-[12.5px] text-white/20 text-center sm:text-left">
            © 2026 Liberty Innovations Inc, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] font-normal text-[12.5px] text-white/20 hover:text-white/40 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] font-normal text-[12.5px] text-white/20 hover:text-white/40 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
