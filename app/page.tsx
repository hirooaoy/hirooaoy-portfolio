"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  video?: string;
};

// Lazy-loading video component
const LazyVideo = ({ src, className, style }: { src: string; className?: string; style?: React.CSSProperties }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset loaded state when src changes
    setIsLoaded(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      {
        threshold: 0.5, // Load when 50% visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    // Load and play video when loaded
    video.load();
    video.play().catch(() => {
      // Ignore autoplay errors
    });
  }, [isLoaded]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      className={className}
      style={style}
      preload="metadata"
    >
      {isLoaded && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

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
          <h1 className="text-2xl font-normal mb-16">Hiroo Aoyama</h1>
          
          <div className="flex items-start gap-8 md:gap-32">
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-4 md:gap-32">
                <button
                  onClick={() => toggleDarkMode(false)}
                  className={`text-left transition-opacity whitespace-nowrap min-w-[90px] md:w-[100px] ${!isDarkMode ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                >
                  Day time
                </button>
                <p className={`transition-opacity duration-500 ${!isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                  Product Designer
                </p>
              </div>
              <div className="flex items-start gap-4 md:gap-32">
                <button
                  onClick={() => toggleDarkMode(true)}
                  className={`text-left transition-opacity whitespace-nowrap min-w-[90px] md:w-[100px] ${isDarkMode ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                >
                  Night time
                </button>
                <p className={`transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                  Vibe coder, photographer, volleyball enthusiast
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
                            <LazyVideo 
                              key={`${project.id}-${project.video}`}
                              src={project.video}
                              className="h-full w-auto object-contain"
                              style={{ maxHeight: '100%', display: 'block' }}
                            />
                          </div>
                        </div>
                      ) : (
                        // Regular rounded rectangle for other videos
                        <div className="rounded-[15px] md:rounded-[20px] overflow-hidden" style={{ width: '80%', height: '80%' }}>
                          <LazyVideo 
                            key={`${project.id}-${project.video}`}
                            src={project.video}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            style={{ transform: 'scale(1.01)', marginBottom: '-1px' }}
                          />
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
            
            <p>Before it was a job, design was something I did during hackathons and personal projects. I loved seeing people connect with what I made. Hearing "this is cool" sparked real joy.</p>
            
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
                resume
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
