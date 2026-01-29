"use client";

import Link from "next/link";
import Image from "next/image";

export default function GoodnightJournal() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        {/* Back Button */}
        <Link href="/" scroll={false} className="inline-block mb-16 hover:opacity-70 transition-opacity">
          ← Back
        </Link>

        {/* Project Content */}
        <h1 className="text-4xl font-normal mb-16">Goodnight Journal</h1>

        {/* Project Content */}
        <div className="space-y-16">
          {/* The Brief */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">The brief</h2>
            <p className="text-lg leading-relaxed">
              I know that the best way to journal is on paper, but I couldn't build a habit around it. Rather than forcing a workflow that didn't work, I chose to design a mobile journaling experience that fit naturally into my nightly routine.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Every design decision supports a nightly habit.</strong> A dark theme to reduce friction at night, a minimal interface to keep focus on writing, and a short breathing exercise to help users transition into reflection.
            </p>
          </section>

          {/* Visual Glimpse */}
          <section className="space-y-6">
            <h2 className="text-2xl font-normal">A little visual glimpse</h2>
            <div className="space-y-4">
              {/* Image 1 - was 3rd */}
              <div className="w-full">
                <Image 
                  src="/goodnight-image-3.jpg" 
                  alt="Goodnight Journal writing experience"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 2 - stays same */}
              <div className="w-full">
                <Image 
                  src="/goodnight-image-2.jpg" 
                  alt="Goodnight Journal breathing exercise"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 3 - was 1st */}
              <div className="w-full">
                <Image 
                  src="/goodnight-image-1.jpg" 
                  alt="Goodnight Journal interface"
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
              <li>iOS app (still work in progress)</li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Learnings</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Small motion choices shape how calm or stressful an experience feels.</li>
              <li>Subtle transitions can make an interface feel significantly more soothing.</li>
              <li>An empty canvas can create paralysis. Light structure and prompts help users begin without breaking focus.</li>
            </ul>
          </section>

          {/* Results */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Results</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Still work in progress</li>
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
