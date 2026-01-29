"use client";

import Link from "next/link";
import Image from "next/image";

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
        <h1 className="text-4xl font-normal mb-16">Adobe Acrobat</h1>

        {/* Project Content */}
        <div className="space-y-16">
          {/* The Brief */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">The brief</h2>
            <p className="text-lg leading-relaxed">
              Millions of people use Acrobat to read, create, and share PDFs, but AI features <strong>struggled to gain adoption</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              I defined a set of <strong>AI design principles</strong> to help Acrobat teams balance speed vs quality, build trust through transparency, and decide when AI should ask for input vs act autonomously. I led the application of these principles across multiple AI features in Acrobat, including podcast and presentation generation.
            </p>
          </section>

          {/* Visual Glimpse */}
          <section className="space-y-6">
            <h2 className="text-2xl font-normal">A little visual glimpse</h2>
            <div className="space-y-4">
              {/* Presentation UI - Main Image */}
              <div className="w-full">
                <Image 
                  src="/acrobat-presentation-ui-optimized.jpg" 
                  alt="Adobe Acrobat presentation creation interface"
                  width={3000}
                  height={1755}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Second Image - New */}
              <div className="w-full">
                <Image 
                  src="/acrobat-image-2.jpg" 
                  alt="Adobe Acrobat AI design principles"
                  width={9180}
                  height={5372}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Third Image */}
              <div className="w-full">
                <Image 
                  src="/acrobat-second-image.jpg" 
                  alt="Adobe Acrobat AI workflow"
                  width={3000}
                  height={1755}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Fourth Image */}
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
              <li>A clear set of AI design principles focused on making trade-offs (e.g. speed vs quality, input vs autonomous, first time vs returning)</li>
              <li>End-to-end flows for podcast and presentation generation</li>
              <li>A reusable AI component system that scaled to new artifacts like deep research reports, flashcards, and charts</li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Learnings</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>There are human needs and AI needs. These should be written out very clearly.</li>
              <li><strong>Show not tell with AI.</strong> Let people see the output then iterate (don't ask people what podcast they want, just show it)</li>
              <li>Don't expect people to write good prompts. Hand-hold them.</li>
            </ul>
          </section>

          {/* Results */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Results</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Established AI design principles with PM and Engineering that guided decisions across Acrobat AI features</li>
              <li>AI assistant MAU grew from 2% → 10.3% (~145,000 MAU within overall PDF activity)</li>
              <li>Podcast listening increased from ~1% → 9%</li>
              <li>Presentation creation increased from ~0.5% → 6%</li>
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
