"use client";

import Link from "next/link";
import Image from "next/image";

export default function ZenniOpticals() {
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
        <h1 className="text-4xl font-normal mb-16">Zenni Opticals</h1>

        {/* Project Content */}
        <div className="space-y-16">
          {/* The Brief */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">The brief</h2>
            <p className="text-lg leading-relaxed">
              I was hired to improve Zenni's mobile app experience. Before designing solutions, I focused on a more fundamental question: <strong>why does Zenni need an app, and what user value does it uniquely provide?</strong>
            </p>
            <p className="text-lg leading-relaxed">
              I identified that the app served loyal, high-intent return users and could act as a fast feedback loop for shipping features, learning from real usage, and iterating quickly. Based on this, I introduced new team habits around reviewing App Store feedback, led two junior designers, and drove multiple high-impact app initiatives. I also helped extend these process and learnings beyond mobile to the web team.
            </p>
          </section>

          {/* Visual Glimpse */}
          <section className="space-y-6">
            <h2 className="text-2xl font-normal">A little visual glimpse</h2>
            <div className="space-y-4">
              {/* Image 1 */}
              <div className="w-full">
                <Image 
                  src="/zenni-image-1.jpg" 
                  alt="Zenni virtual try-on flow"
                  width={10930}
                  height={6395}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 2 */}
              <div className="w-full">
                <Image 
                  src="/zenni-image-2.jpg" 
                  alt="Zenni virtual try-on feature screens"
                  width={10930}
                  height={6395}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 3 */}
              <div className="w-full">
                <Image 
                  src="/zenni-image-3.jpg" 
                  alt="App Store review feedback"
                  width={10930}
                  height={6395}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
              {/* Image 4 */}
              <div className="w-full">
                <Image 
                  src="/zenni-image-4.jpg" 
                  alt="Feedback tracking and analysis"
                  width={10930}
                  height={6395}
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
              <li>Revamped Virtual Try-On to help users confidently choose glasses and increase conversion</li>
              <li>Led checkout improvements to reduce friction and increase conversion</li>
              <li>Built a mobile design library to improve UI consistency and eng handoffs</li>
              <li>Established user-centric habits, including Slack channel around user reviews and biweekly cross-functional jam sessions</li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Learnings</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Designers can build <strong>better team habits</strong> to care about users by making user feedback part of the daily workflow (e.g., creating user feedback Slack channel and tagging PMs and engineers, hosting shared user research sessions).</li>
              <li>Jam sessions work best as collaborative problem-solving spaces, not debates. Co-designing together helps teams align around user needs and move faster.</li>
              <li>Design crits should be a safe learning environment, not performance reviews. Creating that space is essential for junior designers to grow and improve together.</li>
            </ul>
          </section>

          {/* Results */}
          <section className="space-y-4">
            <h2 className="text-2xl font-normal">Results</h2>
            <ul className="text-lg leading-relaxed space-y-2 list-disc pl-6">
              <li>Virtual Try-On increased conversion from ~0.5% → 11%, contributing an estimated $17M in revenue</li>
              <li>Zenni's app reached #1 in the App Store, surpassing Warby Parker (4.2 star to 4.8 star in 6 months)</li>
              <li>Established cross-functional engagement with user feedback across mobile and web teams</li>
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
