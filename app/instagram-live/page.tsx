"use client";

import Link from "next/link";
import Image from "next/image";

export default function InstagramLive() {
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
        <h1 className="text-4xl font-normal mb-16">Instagram Live</h1>

        {/* Project Content */}
        <div className="space-y-16">
          {/* The Brief */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">The brief</h2>
            <p className="text-lg leading-relaxed">
              Instagram Live is a key way creators connect with fans, but monetization during livestreams was limited. The goal was to <strong>help creators earn directly during Live while making fans feel genuinely rewarded</strong> for supporting their favorite creators.
            </p>
            <p className="text-lg leading-relaxed">
              I focused on understanding what delight means for fans in live moments and how creators could easily recognize and appreciate that support.
            </p>
          </section>

          {/* Visual Glimpse */}
          <section className="space-y-6">
            <h2 className="text-2xl font-normal">A little visual glimpse</h2>
            <div className="space-y-4">
              {/* Image 1 */}
              <div className="w-full">
                <Image 
                  src="/instagram-image-1.jpg" 
                  alt="Instagram Live fan tipping experience"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 2 */}
              <div className="w-full">
                <Image 
                  src="/instagram-image-2.jpg" 
                  alt="Instagram Live badge purchase flow"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 3 */}
              <div className="w-full">
                <Image 
                  src="/instagram-image-3.jpg" 
                  alt="Instagram Live real-time feedback"
                  width={4372}
                  height={2558}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 4 */}
              <div className="w-full">
                <Image 
                  src="/instagram-image-4.jpg" 
                  alt="Instagram Live creator acknowledgment"
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
              <li>Led design sprints with PM and Engineering to define what fan delight looks like during Instagram Live</li>
              <li>Prototyped in Origami and ran user testing on the end-to-end fan tipping experience (badge purchase, live display, and real-time feedback)</li>
              <li>Co-designed with other Instagram teams around creator acknowledgment flows during and after Live to recognize fan support (e.g., post-Live stories, mass thank-you DMs)</li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Learnings</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Prototyping and animation help evaluate emotional value, not just flows or UI</li>
              <li>Tools like Origami make designs come to life and easier to align teams around</li>
              <li>Jam sessions like Crazy 8s unlock unconventional ideas and bring cross-functional teams together</li>
            </ul>
          </section>

          {/* Results */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Results</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Launched Live monetization tools used by 10K+ creators</li>
              <li>Increased average tip per fan from $2 → $4.8, with strong engagement from top supporters</li>
              <li>Fan recognition features were used in ~70% of Lives, supporting continued investment in the experience</li>
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
