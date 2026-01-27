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
        <Link href="/" className="inline-block mb-16 hover:opacity-70 transition-opacity">
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
              Millions of people use Acrobat to read, create, and share PDFs. There are many investments in AI projects, but they have been <strong>struggling to be adopted</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              I have rethought about how to successfully help people with AI. I created <strong>principles</strong> around balancing output speed vs quality, building confidence in AI via transparency, and knowing when to ask for inputs. I have implemented my own principles and designed and improved several AI features, including podcast and presentation.
            </p>
          </section>

          {/* Visual Glimpse */}
          <section className="space-y-6">
            <h2 className="text-2xl font-normal">A little visual glimpse</h2>
            <div className="space-y-4">
              {/* Flowchart Image */}
              <div className="w-full">
                <Image 
                  src="/acrobat-flowchart.png" 
                  alt="AI workflow flowchart"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
              {/* Two squares side by side */}
              <div className="flex gap-4">
                <div className="flex-1 aspect-square bg-gray-200"></div>
                <div className="flex-1 aspect-square bg-gray-200"></div>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Learnings</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>There are human needs and AI needs. These should be written out very clearly.</li>
              <li>Show not tell with AI. Let people see the output then iterate.</li>
              <li>Don't expect people to write good prompts. Hand-hold them.</li>
            </ul>
          </section>

          {/* Results */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Results</h2>
            <p className="text-lg leading-relaxed">insert sample text</p>
          </section>

          {/* Call to Action */}
          <section className="mb-32">
            <p className="text-lg leading-relaxed">
              <a 
                href="mailto:hirooaoy@gmail.com"
                className="hover:opacity-70 transition-opacity underline"
              >
                Email me
              </a>
              {' '}to learn more.{' '}
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
