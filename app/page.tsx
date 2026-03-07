"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { scrambleText, startGlitchAnimation } from "../lib/glitch-text";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  video?: string;
};

const NAME_TEXT = "Hiroo Aoyama";
const DESIGNER_DEFAULT_TEXT = "Sr. Product Designer";
const DESIGNER_HOVER_TEXT = "I like observing and listening to users";
const CODER_DEFAULT_TEXT = "Vibe coder";
const CODER_HOVER_TEXT = "I make apps";
const PHOTOGRAPHER_DEFAULT_TEXT = "photographer";
const PHOTOGRAPHER_HOVER_TEXT = "IG @hirooaoy_";
const VOLLEYBALL_DEFAULT_TEXT = "volleyball enthusiast";
const VOLLEYBALL_HOVER_TEXT = "let's go team japan!!!";
const NAME_HOVER_TEXT = "Osaka → Shanghai → Atlanta → San Francisco";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [displayName, setDisplayName] = useState(NAME_TEXT);
  const [designerLabel, setDesignerLabel] = useState(DESIGNER_DEFAULT_TEXT);
  const [coderLabel, setCoderLabel] = useState(CODER_DEFAULT_TEXT);
  const [photographerLabel, setPhotographerLabel] = useState(PHOTOGRAPHER_DEFAULT_TEXT);
  const [volleyballLabel, setVolleyballLabel] = useState(VOLLEYBALL_DEFAULT_TEXT);
  const designerAnimationRef = useRef<number | null>(null);
  const coderAnimationRef = useRef<number | null>(null);
  const photographerAnimationRef = useRef<number | null>(null);
  const volleyballAnimationRef = useRef<number | null>(null);
  const nameAnimationRef = useRef<number | null>(null);

  // Load saved theme preference on mount (persists through refresh, not browser close)
  useEffect(() => {
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Save theme preference when it changes
  const toggleDarkMode = (value: boolean) => {
    setIsDarkMode(value);
    sessionStorage.setItem('theme', value ? 'dark' : 'light');
    
    // Update the HTML class immediately to prevent flash on navigation
    if (value) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  // Restore scroll position when returning to page
  useEffect(() => {
    const savedScroll = sessionStorage.getItem('homeScrollPosition');
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
      sessionStorage.removeItem('homeScrollPosition');
    }
  }, []);

  // Quick load-time glitch effect for the main name
  useEffect(() => {
    return startGlitchAnimation({
      target: NAME_TEXT,
      durationMs: 850,
      frameDurationMs: 45,
      onUpdate: setDisplayName,
    });
  }, []);

  const stopTextAnimation = (animationRef: { current: number | null }) => {
    if (animationRef.current !== null) {
      window.clearInterval(animationRef.current);
      animationRef.current = null;
    }
  };

  const animateTextLabel = (
    target: string,
    setLabel: (value: string) => void,
    animationRef: { current: number | null },
    totalDurationMs: number = 450,
  ) => {
    stopTextAnimation(animationRef);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLabel(target);
      return;
    }

    const frameDurationMs = 30;
    const totalFrames = Math.ceil(totalDurationMs / frameDurationMs);
    let currentFrame = 0;

    animationRef.current = window.setInterval(() => {
      currentFrame += 1;
      const progress = currentFrame / totalFrames;

      if (progress >= 1) {
        setLabel(target);
        stopTextAnimation(animationRef);
        return;
      }

      setLabel(scrambleText(target, progress));
    }, frameDurationMs);
  };

  const animateDesignerLabel = (target: string) => {
    animateTextLabel(target, setDesignerLabel, designerAnimationRef);
  };

  const animateCoderLabel = (target: string) => {
    animateTextLabel(target, setCoderLabel, coderAnimationRef);
  };

  const animatePhotographerLabel = (target: string) => {
    animateTextLabel(target, setPhotographerLabel, photographerAnimationRef);
  };

  const animateVolleyballLabel = (target: string) => {
    animateTextLabel(target, setVolleyballLabel, volleyballAnimationRef);
  };

  const animateNameLabel = (target: string) => {
    animateTextLabel(target, setDisplayName, nameAnimationRef, 620);
  };

  useEffect(() => {
    return () => {
      stopTextAnimation(designerAnimationRef);
      stopTextAnimation(coderAnimationRef);
      stopTextAnimation(photographerAnimationRef);
      stopTextAnimation(volleyballAnimationRef);
      stopTextAnimation(nameAnimationRef);
    };
  }, []);

  const handleDesignerMouseEnter = () => {
    animateDesignerLabel(DESIGNER_HOVER_TEXT);
  };

  const handleDesignerMouseLeave = () => {
    animateDesignerLabel(DESIGNER_DEFAULT_TEXT);
  };

  const handleCoderMouseEnter = () => {
    animateCoderLabel(CODER_HOVER_TEXT);
  };

  const handleCoderMouseLeave = () => {
    animateCoderLabel(CODER_DEFAULT_TEXT);
  };

  const handlePhotographerMouseEnter = () => {
    animatePhotographerLabel(PHOTOGRAPHER_HOVER_TEXT);
  };

  const handlePhotographerMouseLeave = () => {
    animatePhotographerLabel(PHOTOGRAPHER_DEFAULT_TEXT);
  };

  const handleVolleyballMouseEnter = () => {
    animateVolleyballLabel(VOLLEYBALL_HOVER_TEXT);
  };

  const handleVolleyballMouseLeave = () => {
    animateVolleyballLabel(VOLLEYBALL_DEFAULT_TEXT);
  };

  const handleNameMouseEnter = () => {
    animateNameLabel(NAME_HOVER_TEXT);
  };

  const handleNameMouseLeave = () => {
    animateNameLabel(NAME_TEXT);
  };

  // Save scroll position before navigating away
  const handleProjectClick = () => {
    sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
  };

  const dayProjects: Project[] = [
    { id: 1, title: "Adobe Acrobat", description: "I crafted design principles around AI.", image: "/project-1.png", video: "/acrobat-video.mp4" },
    { id: 2, title: "Zenni Opticals", description: "I built a process that got our app to #1 glasses app.", image: "/project-2.png", video: "/zenni-vto.mp4" },
    { id: 3, title: "WhatsApp Payments", description: "I designed and launched payments in Brazil.", image: null, video: "/whatsapp-payments-video.mp4" },
    { id: 4, title: "Instagram Live", description: "I designed and launched parts of creator monetization.", image: null, video: "/instagram-live-video.mp4" },
  ];

  const nightProjects: Project[] = [
    { id: 1, title: "Stampbook", description: "I put digital stamps around the world so people can collect while traveling.", image: null, video: "/stampbook-video.mp4" },
    { id: 2, title: "Goodnight Journal", description: "I designed a simple journal with breathing exercise to reflect every night.", image: null, video: "/goodnight-journal-video.mp4" },
  ];

  const photos = [
    { id: 1, src: "/photos/photo-1.jpg", alt: "Photo 1" },
    { id: 2, src: "/photos/photo-2.jpg", alt: "Photo 2" },
    { id: 3, src: "/photos/photo-3.jpg", alt: "Photo 3" },
    { id: 4, src: "/photos/photo-4.jpg", alt: "Photo 4" },
    { id: 5, src: "/photos/photo-5.jpg", alt: "Photo 5" },
    { id: 6, src: "/photos/photo-6.jpg", alt: "Photo 6" },
    { id: 7, src: "/photos/photo-7.jpg", alt: "Photo 7" },
    { id: 8, src: "/photos/photo-8.jpg", alt: "Photo 8" },
  ];

  const currentProjects = isDarkMode ? nightProjects : dayProjects;

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 pt-48 md:pt-80 pb-48 md:pb-64">
        {/* Header */}
        <header className="mb-32 md:mb-48">
          <h1 className="text-2xl font-normal mb-16" aria-label={NAME_TEXT}>
            <span onMouseEnter={handleNameMouseEnter} onMouseLeave={handleNameMouseLeave}>
              {displayName}
            </span>
          </h1>
          
          <div className="flex items-start gap-8 md:gap-32">
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-4 md:gap-32">
                <button
                  onClick={() => toggleDarkMode(false)}
                  className={`text-left transition-opacity whitespace-nowrap min-w-[90px] md:w-[100px] ${!isDarkMode ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                >
                  Day time
                </button>
                <p className={`transition-opacity duration-500 ${!isDarkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <span
                    onMouseEnter={handleDesignerMouseEnter}
                    onMouseLeave={handleDesignerMouseLeave}
                  >
                    {designerLabel}
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-4 md:gap-32">
                <button
                  onClick={() => toggleDarkMode(true)}
                  className={`text-left transition-opacity whitespace-nowrap min-w-[90px] md:w-[100px] ${isDarkMode ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                >
                  Night time
                </button>
                <p className={`transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <span
                    onMouseEnter={handleCoderMouseEnter}
                    onMouseLeave={handleCoderMouseLeave}
                  >
                    {coderLabel}
                  </span>
                  , <span
                    onMouseEnter={handlePhotographerMouseEnter}
                    onMouseLeave={handlePhotographerMouseLeave}
                  >
                    {photographerLabel}
                  </span>
                  , <span
                    onMouseEnter={handleVolleyballMouseEnter}
                    onMouseLeave={handleVolleyballMouseLeave}
                  >
                    {volleyballLabel}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Most Recent Work/Projects Section */}
        <section className="mb-48 md:mb-64">
          <h2 className="text-xl font-normal mb-8">
            {isDarkMode ? 'Most recent personal projects' : 'Most recent work'}
          </h2>
          
          <div className="grid grid-cols-1 gap-24">
            {currentProjects.map((project) => (
              <div 
                key={project.id} 
                className="flex flex-col gap-6 group"
              >
                {/* Project Thumbnail */}
                <a 
                  href={`/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleProjectClick}
                  className="w-full rounded-lg transition-all duration-700 overflow-hidden cursor-pointer block"
                >
                  <div 
                    className={`w-full h-full ${isDarkMode ? 'bg-zinc-800 group-hover:opacity-90' : 'bg-[#EEEEEE] group-hover:opacity-70'} flex items-center justify-center`}
                    style={{ aspectRatio: '1280/720' }}
                  >
                    {project.video ? (
                      project.title === "Goodnight Journal" || project.title === "Zenni Opticals" || project.title === "Instagram Live" || project.title === "Stampbook" || project.title === "WhatsApp Payments" ? (
                        // Portrait video for Goodnight Journal, Zenni Opticals, Instagram Live, Stampbook, and WhatsApp Payments
                        <div className="flex items-center justify-center transition-transform duration-500 group-hover:scale-105" style={{ width: '100%', height: '100%' }}>
                          <div className="rounded-[15px] md:rounded-[20px] overflow-hidden" style={{ maxHeight: '75%', height: '100%' }}>
                            <video 
                              autoPlay
                              muted
                              loop
                              playsInline
                              key={project.video}
                              className="h-full w-auto object-contain"
                              style={{ maxHeight: '100%', display: 'block' }}
                            >
                              <source src={project.video} type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      ) : (
                        // Regular rounded rectangle for other videos
                        <div className="rounded-[15px] md:rounded-[20px] overflow-hidden" style={{ width: '80%', height: '80%' }}>
                          <video 
                            autoPlay
                            muted
                            loop
                            playsInline
                            key={project.video}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            style={{ transform: 'scale(1.01)', marginBottom: '-1px' }}
                          >
                            <source src={project.video} type="video/mp4" />
                          </video>
                        </div>
                      )
                    ) : project.image ? (
                      <div className="rounded-[15px] md:rounded-[20px] overflow-hidden" style={{ width: '80%', height: '80%' }}>
                        <Image 
                          src={project.image}
                          alt={project.title}
                          width={1280}
                          height={720}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          style={{ transform: 'scale(1.02)' }}
                        />
                      </div>
                    ) : null}
                  </div>
                </a>
                
                {/* Project Info */}
                <div>
                  <h3 className="font-medium mb-2">{project.title}</h3>
                  <p className="opacity-70">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Some photos I took Section - Only visible in dark mode */}
        {isDarkMode && (
          <section className="mb-48 md:mb-64">
            <h2 className="text-xl font-normal mb-8">Some photos I took</h2>
            
            <div className="relative">
              {/* Horizontal Scrollable Gallery */}
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {photos.map((photo) => (
                  <div 
                    key={photo.id}
                    className="flex-shrink-0 w-[calc(30%-16px)] min-w-[280px] snap-start"
                  >
                    <div className="w-full rounded-lg overflow-hidden bg-zinc-800" style={{ aspectRatio: '3/2' }}>
                      <Image 
                        src={photo.src}
                        alt={photo.alt}
                        width={800}
                        height={533}
                        className="w-full h-full object-cover"
                        quality={95}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
            </div>
          </section>
        )}

        {/* Let's Connect Section */}
        <section>
          <h2 className="text-xl font-normal mb-8">Let's connect</h2>
          
          <div className="max-w-[800px] space-y-4 leading-relaxed">
            <p>Somewhere between chasing career ladders and comparing myself to others, I started to forget why I chose design. It started to feel like just a job.</p>
            
            <p>Before it was a job, design was something I did during hackathons and personal projects. I loved seeing people connect with what I made. Hearing "this is cool" <span className="cursor-sparkles">sparked real joy</span>.</p>
            
            <p>I want to work with people I can co-design with, where design is more than a job. Design is a rewarding process to connect with people and make someone's life better.</p>
            
            <p>
              Contact me via{' '}
              <a href="mailto:hirooaoy@gmail.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">
                Email
              </a>
              {' '}or{' '}
              <a href="https://linkedin.com/in/hirooaoy/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">
                LinkedIn
              </a>
              ! View{' '}
              <a href="/Hiroo-Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">
                Resume
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
