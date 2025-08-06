'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import VantaBirds from '@/components/ui/VantaBirds';

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
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Vanta.js Birds Background */}
      <VantaBirds className="opacity-80" />
      
      {/* Mystical Glow Following Mouse */}
      <motion.div 
        className="fixed w-96 h-96 bg-chart-3 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ zIndex: 3 }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Main Content */}
      <div className="relative text-center px-6 max-w-4xl" style={{ zIndex: 10 }}>
        {/* Name with Magical Effect */}
        <motion.h1 
          className="font-ghibli font-bold text-6xl md:text-8xl mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-chart-3 via-primary to-chart-1 bg-clip-text text-transparent hover:from-chart-2 hover:via-destructive hover:to-primary transition-all duration-500">
            Kim Pham
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="inline-block">Learning, Experimenting, Building</span>
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
         <b>Where</b> you get to know who I am, <b>What</b> I am capable of, <b>Why</b> I am passionate about my mission, <b>When</b> you should reach out for my assistance, and <b>How</b> I transform ideas into amazing digital experiences 😊
        </motion.p>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ zIndex: 10 }}
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