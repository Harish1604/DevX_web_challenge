import React, { useState, useEffect, useRef } from 'react';
import { toast } from "@/components/ui/use-toast";
import { 
  SparklesIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ZapIcon,
  RocketIcon,
  ClockIcon,
  ArrowRightIcon,
  MousePointerIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Define our different eras
const eras = [
  {
    id: 'era90s',
    name: '90s Web 1.0',
    year: '1990-1999',
    description: 'The early web was characterized by simple HTML, table-based layouts, and animated GIFs.',
    features: ['Table Layouts', 'Animated GIFs', 'Hit Counters', 'Guestbooks'],
    color: '#00bfff',
    icon: <SparklesIcon className="h-6 w-6" />
  },
  {
    id: 'era2000s',
    name: 'Skeuomorphic Era',
    year: '2000-2012',
    description: 'Digital interfaces mimicked real-world objects with detailed textures and 3D effects.',
    features: ['3D Effects', 'Glossy Buttons', 'Flash Animations', 'Realistic Textures'],
    color: '#8A2BE2',
    icon: <ZapIcon className="h-6 w-6" />
  },
  {
    id: 'eraModern',
    name: 'Modern Minimalism',
    year: '2013-Present',
    description: 'Clean, flat designs with focus on typography, white space, and subtle animations.',
    features: ['Flat Design', 'Large Typography', 'Microinteractions', 'Responsive Layouts'],
    color: '#0070f3',
    icon: <RocketIcon className="h-6 w-6" />
  }
];

const Index = () => {
  const [activeEra, setActiveEra] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const floatingBlobsRef = useRef<HTMLDivElement>(null);

  // Generate particles for transition effect
  const generateParticles = () => {
    const newParticles = [];
    const count = Math.floor(Math.random() * 10) + 15; // 15-25 particles
    
    for (let i = 0; i < count; i++) {
      const size = Math.floor(Math.random() * 8) + 4; // 4-12px
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 2 + 1; // 1-3s
      const delay = Math.random() * 0.5;
      
      newParticles.push(
        <div 
          key={`particle-${i}-${Date.now()}`}
          className="absolute rounded-full bg-white animate-scale-in"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${posX}%`,
            top: `${posY}%`,
            opacity: Math.random() * 0.5 + 0.3,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    
    setParticles(newParticles);
    
    // Remove particles after animation
    setTimeout(() => {
      setParticles([]);
    }, 3000);
  };

  // Change era
  const changeEra = (index: number) => {
    if (index === activeEra) return;
    
    setIsTransitioning(true);
    generateParticles();
    
    setTimeout(() => {
      setActiveEra(index);
      setIsTransitioning(false);
      
      // Toast notification
      toast({
        title: `${eras[index].name}`,
        description: `${eras[index].year}: ${eras[index].description}`,
      });
    }, 500);
  };

  // Handle mouse move for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      if (floatingBlobsRef.current) {
        const blobs = floatingBlobsRef.current.children;
        for (let i = 0; i < blobs.length; i++) {
          const blob = blobs[i] as HTMLElement;
          const speed = Number(blob.dataset.speed || 1);
          const offsetX = (window.innerWidth / 2 - e.clientX) * 0.01 * speed;
          const offsetY = (window.innerHeight / 2 - e.clientY) * 0.01 * speed;
          blob.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
      }
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      if (heroSectionRef.current) {
        heroSectionRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
        heroSectionRef.current.style.opacity = `${1 - window.scrollY / 500}`;
      }
      
      if (timelineRef.current) {
        const timelineBounding = timelineRef.current.getBoundingClientRect();
        const timelineY = timelineBounding.top;
        const windowHeight = window.innerHeight;
        
        if (timelineY < windowHeight && timelineY > 0) {
          const progress = 1 - (timelineY / windowHeight);
          timelineRef.current.style.transform = `translateX(${-50 + progress * 50}%)`;
          timelineRef.current.style.opacity = `${0.3 + progress * 0.7}`;
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animated background blobs
  const renderBackgroundBlobs = () => {
    return (
      <div ref={floatingBlobsRef} className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl animate-float"
          data-speed="2"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl animate-float" 
          style={{ animationDelay: '-1.5s' }}
          data-speed="1.5"
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-pink-400/15 blur-3xl animate-float" 
          style={{ animationDelay: '-3s' }}
          data-speed="3"
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl animate-float" 
          style={{ animationDelay: '-4.5s' }}
          data-speed="1"
        ></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Dynamic Background */}
      {renderBackgroundBlobs()}
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 bg-noise-pattern opacity-20 pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern-size pointer-events-none opacity-5"></div>
      
      {/* Transition Particles */}
      <div className="particles-container fixed inset-0 pointer-events-none z-10">
        {particles}
      </div>
      
      {/* Mouse Cursor Follower */}
      <div 
        className="fixed w-8 h-8 rounded-full border-2 border-white/30 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          transition: 'transform 0.1s ease-out, opacity 0.3s ease-in-out' 
        }}
      ></div>
      
      {/* Hero Section */}
      <div ref={heroSectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse-slow opacity-70 blur-lg"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 animate-pulse-slow opacity-70 blur-lg"></div>
        
        {/* Title */}
        <div className="text-center mb-12 relative">
          <div className="absolute -left-10 -top-10 w-20 h-20 text-5xl animate-float opacity-20">
            <SparklesIcon />
          </div>
          <div className="text-sm uppercase tracking-widest text-blue-300 mb-2 animate-fade-in">
            Interactive Journey Through Time
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Evolution of UI
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Experience the transformation of web design across different eras through this interactive timeline.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
            <MousePointerIcon className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-slide-up">
              Interactive Timeline
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Click on different eras to see how web design has evolved over the decades.
            </p>
          </div>
          
          {/* Horizontal Timeline */}
          <div ref={timelineRef} className="relative transition-all duration-700 ease-out">
            <div className="timeline-track h-1 bg-gray-700 rounded-full mb-12">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${(activeEra / (eras.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between">
              {eras.map((era, index) => (
                <div 
                  key={era.id} 
                  className={`relative pb-8 transition-all duration-500 ease-in-out ${index === activeEra ? 'scale-110' : 'opacity-80 hover:opacity-100'}`}
                >
                  <button
                    onClick={() => changeEra(index)}
                    className={`relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300
                      ${index === activeEra 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20 scale-110 z-10' 
                        : 'bg-gray-800 hover:bg-gray-700'}`}
                  >
                    <div className={`text-white ${index === activeEra ? 'animate-pulse-slow' : ''}`}>
                      {era.icon}
                    </div>
                    
                    {index === activeEra && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-30 blur animate-pulse-slow"></div>
                    )}
                  </button>
                  
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max text-center pt-4">
                    <div className={`font-bold transition-all duration-300 ${index === activeEra ? 'text-white text-lg' : 'text-gray-400'}`}>
                      {era.name}
                    </div>
                    <div className={`text-sm transition-all duration-300 ${index === activeEra ? 'text-blue-300' : 'text-gray-500'}`}>
                      {era.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Era Details */}
          <div className="mt-32 relative">
            <div 
              className={`absolute inset-0 bg-gradient-to-r rounded-2xl opacity-10 transition-all duration-500
              ${activeEra === 0 ? 'from-blue-800 to-blue-600' : 
                activeEra === 1 ? 'from-purple-800 to-purple-600' : 
                'from-pink-800 to-red-600'}`}
            ></div>
            
            <div className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-black/20 pointer-events-none"></div>
              
              <div className={`transition-all duration-500 transform ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold mb-2 text-white">{eras[activeEra].name}</h3>
                    <div className="text-blue-300 text-lg mb-4">{eras[activeEra].year}</div>
                    <p className="text-gray-300 mb-6">{eras[activeEra].description}</p>
                    
                    <div className="space-y-2">
                      <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">Key Features:</div>
                      <div className="flex flex-wrap gap-2">
                        {eras[activeEra].features.map((feature, i) => (
                          <span 
                            key={i} 
                            className="bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center items-center">
                    <div className="relative">
                      {/* Different visual for each era */}
                      {activeEra === 0 && (
                        <div className="pixel-border bg-white p-8 animate-float shadow-xl">
                          <div className="text-black text-center">
                            <div className="bg-era90s-primary text-white font-bold p-2 mb-4">WELCOME!</div>
                            <div className="grid grid-cols-3 gap-2">
                              {Array(3).fill(0).map((_, i) => (
                                <div key={i} className="h-12 w-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-xs">Image {i+1}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 animate-pulse-slow">
                              <span className="text-blue-700 underline">Click here!</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeEra === 1 && (
                        <div className="skeuomorphic p-5 animate-float shadow-xl">
                          <div className="bg-gradient-to-b from-gray-100 to-gray-300 p-6 rounded-lg border border-gray-400 shadow-inner">
                            <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded-lg p-3 mb-4 flex items-center justify-between shadow-inner">
                              <div>My Profile</div>
                              <div className="flex gap-2">
                                {['red', 'yellow', 'green'].map(color => (
                                  <div key={color} className="w-3 h-3 rounded-full bg-gray-200"></div>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <div className="w-1/3 h-24 bg-white rounded-md border border-gray-300 shadow-inner"></div>
                              <div className="w-2/3 flex flex-col gap-2">
                                <div className="h-5 bg-white rounded-md border border-gray-300 shadow-inner"></div>
                                <div className="h-5 bg-white rounded-md border border-gray-300 shadow-inner"></div>
                                <div className="h-5 bg-white rounded-md border border-gray-300 shadow-inner"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeEra === 2 && (
                        <div className="modern-card bg-white p-6 rounded-xl shadow-2xl animate-float">
                          <div className="space-y-4">
                            <div className="h-6 w-24 bg-gray-200 rounded-md"></div>
                            <div className="h-8 w-full bg-gray-100 rounded-md"></div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="h-20 bg-gray-100 rounded-lg"></div>
                              <div className="h-20 bg-gray-100 rounded-lg"></div>
                            </div>
                            <div className="flex justify-end">
                              <div className="h-8 w-24 bg-blue-500 rounded-md"></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Decorative elements */}
                      <div className="absolute -right-6 -bottom-6 text-4xl text-white/20 animate-rotate-slow">
                        {activeEra === 0 && <SparklesIcon />}
                        {activeEra === 1 && <ZapIcon />}
                        {activeEra === 2 && <RocketIcon />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-12 gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => changeEra(activeEra > 0 ? activeEra - 1 : eras.length - 1)}
              className="bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Previous Era
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => changeEra(activeEra < eras.length - 1 ? activeEra + 1 : 0)}
              className="bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              Next Era
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up">Ready to Explore UI Evolution?</h2>
          <p className="text-xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Dive deeper into the history of web design and see how digital interfaces have changed our lives.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 animate-slide-up shadow-lg shadow-blue-500/20"
            style={{ animationDelay: '0.4s' }}
          >
            Start The Journey
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} UI Evolution Explorer
          </p>
          <p className="mt-1 text-gray-500 text-sm">
            An interactive journey through the history of web design
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
