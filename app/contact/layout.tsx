import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Liberty CAD",
  description:
    "Get in touch with Liberty CAD. Plant engineering consulting. Call 226-526-5336 or email info@libertycad.com.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
