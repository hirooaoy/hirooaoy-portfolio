"use client";

import Link from "next/link";
import Image from "next/image";
import GlitchTitle from "../components/glitch-title";

export default function AdobeAcrobat() {
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
        <GlitchTitle text="Adobe Acrobat" className="text-4xl font-normal mb-16" />

        {/* Project Content */}
        <div className="space-y-16">
          {/* The Brief */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">The brief</h2>
            <p className="text-lg leading-relaxed">
              300M+ people come to Acrobat to read PDFs such as business reports and textbooks. With AI, we empower people to consume content faster and dive deeper.
            </p>
            <p className="text-lg leading-relaxed">
              One of our bets was on AI artifacts, where people can transform PDFs into engaging formats such as podcasts and flashcards. <strong>I led the horizontal framework</strong>, including the AI conversation model, discovery, navigation, and design system.
            </p>
          </section>

          {/* Visual Glimpse */}
          <section className="space-y-6">
            <h2 className="text-2xl font-normal">A little visual glimpse</h2>
            <div className="space-y-4">
              {/* Presentation UI - Main Image */}
              <div className="w-full">
                <Image 
                  src="/frame-2087327552.jpg" 
                  alt="Adobe Acrobat presentation creation interface"
                  width={10930}
                  height={6395}
                  quality={100}
                  unoptimized
                  priority
                  className="w-full h-auto"
                />
              </div>
              {/* Second Image - New */}
              <div className="w-full">
                <Image 
                  src="/frame-2087327553-1.jpg" 
                  alt="Adobe Acrobat AI design principles"
                  width={10930}
                  height={6395}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Third Image */}
              <div className="w-full">
                <Image 
                  src="/frame-2087327547.jpg" 
                  alt="Adobe Acrobat AI workflow"
                  width={8744}
                  height={5116}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Fourth Image */}
              <div className="w-full">
                <Image 
                  src="/frame-2087327554-4.jpg" 
                  alt="Adobe Acrobat artifact framework details"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Fifth Image */}
              <div className="w-full">
                <Image 
                  src="/acrobat-third-image.jpg" 
                  alt="Adobe Acrobat AI features"
                  width={3000}
                  height={1755}
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
              <li>User testing research report, jam workshop sessions, and a working prototype in Cursor.</li>
              <li>A reusable AI component system that scaled to all artifacts like podcasts, flashcards, deep research reports, and practice quizzes.</li>
              <li>End-to-end flows for all artifacts, including loading states, AI conversation model, and side panel.</li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Learnings</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>AI can be powerful, but also overwhelming and frustrating.</li>
              <li>Don't expect people to write good prompts. <strong>Hand-hold them.</strong></li>
              <li>Reading and learning are continuous. Get people in the flow.</li>
            </ul>
          </section>

          {/* Results */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Results</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Established AI design principles with PM and Engineering that guided decisions across Acrobat AI features</li>
              <li>AI assistant MAU grew from 2% → 10.3% (~145,000 MAU within overall PDF activity)</li>
              <li>Podcast creation rate increased from 22% → 84%</li>
              <li>Podcast listening averaged 1 minute+ and showed clear iteration behavior within the same session</li>
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
