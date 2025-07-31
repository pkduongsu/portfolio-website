'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Scroll } from 'lucide-react';

const FloatingSpirit = ({ children, delay = 0, duration = 8 }: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number; 
}) => (
  <motion.div 
    className="absolute opacity-30 hover:opacity-60 transition-opacity duration-300"
    animate={{
      y: [-10, -20, -10],
      x: [-5, 5, -5],
      rotate: [0, 5, 0, -5, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const Soot = ({ size = 'w-2 h-2', delay = 0 }: { size?: string; delay?: number }) => (
  <motion.div 
    className={`${size} bg-foreground rounded-full absolute opacity-40`}
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const ToriiGate = () => (
  <motion.svg 
    className="w-24 h-16 mx-auto text-destructive mb-4" 
    viewBox="0 0 100 60" 
    fill="currentColor"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <rect x="10" y="45" width="4" height="15" />
    <rect x="86" y="45" width="4" height="15" />
    <rect x="0" y="40" width="100" height="6" rx="3" />
    <rect x="5" y="30" width="90" height="4" rx="2" />
  </motion.svg>
);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/20 via-muted to-accent/20 overflow-hidden flex items-center justify-center">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Soot Sprites */}
        <Soot size="w-3 h-3" delay={0} />
        <Soot size="w-2 h-2" delay={1.5} />
        <Soot size="w-4 h-4" delay={3} />
        
        {/* Spirit Orbs using chart colors */}
        <FloatingSpirit delay={0}>
          <div className="w-6 h-6 bg-chart-3 rounded-full blur-sm" style={{ left: '10%', top: '20%' }} />
        </FloatingSpirit>
        <FloatingSpirit delay={2}>
          <div className="w-4 h-4 bg-chart-4 rounded-full blur-sm" style={{ right: '20%', top: '30%' }} />
        </FloatingSpirit>
        <FloatingSpirit delay={4}>
          <div className="w-8 h-8 bg-chart-2 rounded-full blur-sm" style={{ left: '70%', top: '60%' }} />
        </FloatingSpirit>
      </div>

      {/* Mystical Glow Following Mouse */}
      <motion.div 
        className="fixed w-96 h-96 bg-chart-3 rounded-full opacity-10 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        {/* Torii Gate Decoration */}
        <motion.div 
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ToriiGate />
        </motion.div>

        {/* Name with Magical Effect */}
        <motion.h1 
          className="font-ghibli font-bold text-6xl md:text-8xl mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-chart-3 via-primary to-chart-1 bg-clip-text text-transparent hover:from-chart-2 hover:via-destructive hover:to-primary transition-all duration-500">
            Your Name
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="inline-block">Crafting Digital Magic</span>
          <span className="text-chart-3 mx-2">•</span>
          <span className="inline-block">Full Stack Developer</span>
        </motion.p>

        {/* Magical Description */}
        <motion.p 
          className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Welcome to my spirit world of code, where ideas transform into digital experiences
          as magical as Chihiro's journey through the bathhouse.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-destructive to-chart-1 hover:from-destructive/80 hover:to-chart-1/80 text-destructive-foreground border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Enter the Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-chart-3 text-chart-3 hover:bg-chart-3 hover:text-background px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
          >
            View My Journey
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-chart-3 to-transparent rounded-full mt-2"
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;