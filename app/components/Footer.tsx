import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

const imgPhone =
  "https://www.figma.com/api/mcp/asset/9ea5f2f1-f572-43f9-95c6-4995b8ce3c7a";
const imgEmail =
  "https://www.figma.com/api/mcp/asset/8b773b69-edb0-4cd3-8ec0-a421e883c42c";
const imgPhoneAlt =
  "https://www.figma.com/api/mcp/asset/5f44b683-a349-4b8d-82cd-5e9267b0cc06";
const imgLocation =
  "https://www.figma.com/api/mcp/asset/f644e836-7778-4c40-a2f5-d6c1886b0287";

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
                alt="Liberty CAD"
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
              <img
                src={imgPhone}
                alt=""
                className="size-[13px] transition-transform duration-300 group-hover:rotate-12"
              />
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
                  href="mailto:info@libertycad.com"
                  className="flex items-center gap-3 font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/30 hover:text-white/60 transition-colors group"
                >
                  <img
                    src={imgEmail}
                    alt=""
                    className="size-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  />
                  info@libertycad.com
                </a>
              </li>
              <li>
                <a
                  href="tel:2265265336"
                  className="flex items-center gap-3 font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/30 hover:text-white/60 transition-colors group"
                >
                  <img
                    src={imgPhoneAlt}
                    alt=""
                    className="size-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-12"
                  />
                  226-526-5336
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-[family-name:var(--font-inter)] font-normal text-[13.5px] text-white/30">
                  <img src={imgLocation} alt="" className="size-3.5 shrink-0 mt-0.5" />
                  Windsor, Ontario, Canada
                </div>
              </li>
            </ul>
          </AnimateOnScroll>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] font-normal text-[12.5px] text-white/20 text-center sm:text-left">
            © 2026 Liberty CAD, Inc. All rights reserved.
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
