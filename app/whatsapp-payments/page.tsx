"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsAppPayments() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        {/* Back Button */}
        <Link href="/" scroll={false} className="inline-block mb-16 hover:opacity-70 transition-opacity">
          ← Back
        </Link>

        {/* Project Content */}
        <h1 className="text-4xl font-normal mb-16">WhatsApp Payments</h1>

        {/* Project Content */}
        <div className="space-y-16">
          {/* The Brief */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">The brief</h2>
            <p className="text-lg leading-relaxed">
              WhatsApp is one of the primary places people buy and sell in Brazil. While the initial plan was to launch a Meta payment wallet, the research in Brazil showed that sellers didn't need a new payment product. They needed <strong>better business tools</strong> to sell where their customers already were.
            </p>
            <p className="text-lg leading-relaxed">
              I worked on the 0→1 effort in Brazil and <strong>helped inform a strategic shift</strong> from a standalone payment wallet to end-to-end seller business tools.
            </p>
          </section>

          {/* Visual Glimpse */}
          <section className="space-y-6">
            <h2 className="text-2xl font-normal">A little visual glimpse</h2>
            <div className="space-y-4">
              {/* Image 1 */}
              <div className="w-full">
                <Image 
                  src="/whatsapp-image-1.jpg" 
                  alt="WhatsApp business tools"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 2 */}
              <div className="w-full">
                <Image 
                  src="/whatsapp-image-2.jpg" 
                  alt="WhatsApp seller experience"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 3 */}
              <div className="w-full">
                <Image 
                  src="/whatsapp-image-3.jpg" 
                  alt="WhatsApp payment flow"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 4 */}
              <div className="w-full">
                <Image 
                  src="/whatsapp-image-4.jpg" 
                  alt="WhatsApp business features"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Deliverables */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Deliverables</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Supported 0→1 product scoping through on-the-ground research in Brazil</li>
              <li>Synthesized local market insights and shared them with leadership to inform product direction</li>
              <li>Contributed to the 0→1 seller and buyer experience, including discovery, onboarding, money requests, and order management</li>
              <li>Designed cross-platform experiences across iOS, Android, and Web</li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Learnings</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Latent user behavior is often more valuable than idealized business goals</li>
              <li>Payment is deeply local and requires country-specific understanding</li>
              <li>Removing friction isn't always the goal. Designing around how users already succeed can matter more</li>
              <li>This was a <strong>turning point</strong> in my career where design became more than pixels. It's a way of thinking for the users. I'm forever grateful for staff designers, researchers, and xfn partners I worked with</li>
            </ul>
          </section>

          {/* Results */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Results</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Launched an MVP enabling 52M+ SMBs in Brazil to sell on WhatsApp</li>
              <li>Helped shift product direction toward seller-first business tools</li>
              <li>Informed the roadmap for future markets by grounding strategy in real user behavior</li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="mb-32">
            <p className="text-lg leading-relaxed">
              <a 
                href="mailto:hirooaoy@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity underline"
              >
              Email me
            </a>
            {' '}to learn more about work and design decisions.{' '}
              <button 
                onClick={scrollToTop}
                className="hover:opacity-70 transition-opacity cursor-pointer underline"
              >
                Back to top
              </button>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
