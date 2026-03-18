"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import AnimateOnScroll from "../components/AnimateOnScroll";

const contactInfo = [
  {
    label: "Office",
    value: "Irving, TX",
    href: null,
  },
  {
    label: "Phone",
    value: "226-526-5336",
    href: "tel:2265265336",
  },
  {
    label: "Email",
    value: "Info@libertyinnovation.com",
    href: "mailto:Info@libertyinnovation.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    projectStage: "",
    projectScope: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message. We will be in touch shortly.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Contact Us"
          title="Ready to Bring Your Project to Life?"
          description="Our expert team delivers reliable, cost-effective engineering solutions tailored to your unique needs. Get in touch today to explore how we can support your goals with precision, efficiency, and professionalism."
        />

        <section className="bg-white py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-[1fr,1.3fr] gap-16">
              {/* Contact Info */}
              <AnimateOnScroll>
                <div>
                  <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[32px] text-[#0b2545] leading-[1.2] tracking-[-0.8px] mb-6">
                    Get in Touch
                  </h2>
                  <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.75] mb-10">
                    Whether you have a specific project in mind or just want to learn more about
                    our services, we are here to help.
                  </p>

                  <div className="flex flex-col gap-6 mb-12">
                    {contactInfo.map((item) => (
                      <div key={item.label}>
                        <div className="font-[family-name:var(--font-inter)] font-semibold text-[11px] text-[rgba(27,79,114,0.8)] tracking-[1.54px] uppercase mb-2">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-[family-name:var(--font-inter)] text-[17px] text-[#0b2545] hover:text-[#1b4f72] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-[family-name:var(--font-inter)] text-[17px] text-[#0b2545]">
                            {item.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-[#f2f5f8] to-[#fafbfc] border border-[#eceef1] rounded-[14px] p-8">
                    <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-[18px] text-[#0b2545] mb-4">
                      Why Work With Us?
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {[
                        "Plant engineering DNA across all disciplines",
                        "Multidisciplinary expertise under one roof",
                        "Proven track record across industries worldwide",
                        "Responsive communication and support",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-[14px] text-[#5a6677] leading-[1.6]"
                        >
                          <span className="size-[6px] rounded-full bg-[#7ec8e3] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Contact Form */}
              <AnimateOnScroll delay={100}>
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#fafbfc] border border-[#eceef1] rounded-[14px] p-10"
                >
                  <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[24px] text-[#0b2545] leading-[1.2] tracking-[-0.6px] mb-8">
                    Request a Quote
                  </h3>

                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full h-[48px] px-4 bg-white border border-[#eceef1] rounded-[8px] font-[family-name:var(--font-inter)] text-[15px] text-[#0b2545] outline-none focus:border-[#7ec8e3] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full h-[48px] px-4 bg-white border border-[#eceef1] rounded-[8px] font-[family-name:var(--font-inter)] text-[15px] text-[#0b2545] outline-none focus:border-[#7ec8e3] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full h-[48px] px-4 bg-white border border-[#eceef1] rounded-[8px] font-[family-name:var(--font-inter)] text-[15px] text-[#0b2545] outline-none focus:border-[#7ec8e3] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full h-[48px] px-4 bg-white border border-[#eceef1] rounded-[8px] font-[family-name:var(--font-inter)] text-[15px] text-[#0b2545] outline-none focus:border-[#7ec8e3] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] mb-2">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full h-[48px] px-4 bg-white border border-[#eceef1] rounded-[8px] font-[family-name:var(--font-inter)] text-[15px] text-[#0b2545] outline-none focus:border-[#7ec8e3] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select project type</option>
                          <option value="plant-engineering">Plant Engineering</option>
                          <option value="structural-engineering">Structural Engineering</option>
                          <option value="mechanical-engineering">Mechanical Engineering</option>
                          <option value="piping-engineering">Piping Engineering</option>
                          <option value="bim-engineering">BIM Engineering</option>
                          <option value="architectural-design">Architectural Design</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] mb-2">
                          Project Stage
                        </label>
                        <select
                          name="projectStage"
                          value={formData.projectStage}
                          onChange={handleChange}
                          className="w-full h-[48px] px-4 bg-white border border-[#eceef1] rounded-[8px] font-[family-name:var(--font-inter)] text-[15px] text-[#0b2545] outline-none focus:border-[#7ec8e3] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select stage</option>
                          <option value="concept">Concept</option>
                          <option value="feed">FEED</option>
                          <option value="detail-engineering">Detail Engineering</option>
                          <option value="brownfield-revamp">Brownfield Revamp</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] mb-2">
                        Estimated Project Scope
                      </label>
                      <input
                        type="text"
                        name="projectScope"
                        value={formData.projectScope}
                        onChange={handleChange}
                        placeholder="e.g. Greenfield plant, vessel revamp, structural detailing..."
                        className="w-full h-[48px] px-4 bg-white border border-[#eceef1] rounded-[8px] font-[family-name:var(--font-inter)] text-[15px] text-[#0b2545] outline-none focus:border-[#7ec8e3] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-[family-name:var(--font-inter)] font-medium text-[13px] text-[#5a6677] mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your project requirements..."
                        className="w-full p-4 bg-white border border-[#eceef1] rounded-[8px] font-[family-name:var(--font-inter)] text-[15px] text-[#0b2545] outline-none focus:border-[#7ec8e3] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-scale w-full h-[52px] bg-[#0b2545] text-white font-[family-name:var(--font-inter)] font-semibold text-[15px] tracking-[0.15px] rounded-[8px] hover:bg-[#0d2e5a] transition-colors mt-2"
                    >
                      Get in Touch
                    </button>
                  </div>
                </form>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Map / Office Section */}
        <section className="bg-[#f7f8fa] py-24">
          <div className="max-w-[1120px] mx-auto px-6">
            <AnimateOnScroll className="text-center">
              <p className="font-[family-name:var(--font-inter)] font-semibold text-[11.5px] text-[rgba(27,79,114,0.8)] tracking-[1.84px] uppercase mb-4">
                Our Office
              </p>
              <h2 className="font-[family-name:var(--font-manrope)] font-bold text-[40px] text-[#0b2545] leading-[1.15] tracking-[-1px] mb-5">
                Irving, TX — Serving North America &amp; Worldwide
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[16px] text-[#7a8694] leading-[1.75] max-w-[520px] mx-auto">
                We are in the business of engineering, but what we are really building is a
                brighter future. Call us directly at 226-526-5336 or email Info@libertyinnovation.com.
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
