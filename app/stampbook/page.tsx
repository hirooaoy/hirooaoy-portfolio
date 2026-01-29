"use client";

import Link from "next/link";
import Image from "next/image";

export default function Stampbook() {
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
        <h1 className="text-4xl font-normal mb-16">Stampbook</h1>

        {/* Project Content */}
        <div className="space-y-16">
          {/* The Brief */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">The brief</h2>
            <p className="text-lg leading-relaxed">
              I was inspired by Japanese eki stamps, which are physical stamps found at train stations that people collect as a record of where they've been. I wanted to bring that feeling into a digital form so I can <strong>collect moments and remember where I've been.</strong>
            </p>
            <p className="text-lg leading-relaxed">
              I've used Cursor and XCode to design and develop ideas directly on my phone. Stampbook is my way of turning inspiration into something real, even if it starts small.
            </p>
          </section>

          {/* Visual Glimpse */}
          <section className="space-y-6">
            <h2 className="text-2xl font-normal">A little visual glimpse</h2>
            <div className="space-y-4">
              {/* Image 1 - was 3rd */}
              <div className="w-full">
                <Image 
                  src="/stampbook-image-3.jpg" 
                  alt="Stampbook experience"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 2 - stays same */}
              <div className="w-full">
                <Image 
                  src="/stampbook-image-2.jpg" 
                  alt="Stampbook collection view"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 3 - was 1st */}
              <div className="w-full">
                <Image 
                  src="/stampbook-image-1.jpg" 
                  alt="Stampbook interface"
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
              <li>Built Stampbook iOS app from scratch alone, including core systems for collections, feed, and notifications</li>
              <li>Implemented backend data management using Firebase and managed version control and iteration through GitHub</li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Learnings</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Vibe coding on a real device reveals what works far beyond static UIs in Figma</li>
              <li>Building feeds and notifications firsthand deepened my respect for scope and technical trade-offs, reshaping how I think about product decisions</li>
              <li>Creating something new from scratch is hard. Adoption requires patience, iteration, and genuine belief in the idea</li>
            </ul>
          </section>

          {/* Results */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Results</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Shipped a working <a href="https://apps.apple.com/kz/app/stampbook/id6754783423" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity underline">App Store</a> build after multiple review iterations</li>
              <li>The app has 6 active users, with 2 users collecting 5+ stamps across the U.S.</li>
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
