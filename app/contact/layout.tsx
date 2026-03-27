import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Liberty CAD Inc",
  description:
    "Get in touch with Liberty CAD Inc. Plant engineering consulting. Call (214) 396-2312 or email Info@libertyinnovation.com.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
