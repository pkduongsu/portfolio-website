'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaBirdsProps {
  className?: string;
  children?: React.ReactNode;
}

const VantaBirds: React.FC<VantaBirdsProps> = ({ className = '', children }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadVanta = async () => {
      try {
        // Load Three.js from CDN
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        
        // Load Vanta.js BIRDS effect from CDN
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js');

        // Wait a moment for scripts to initialize
        setTimeout(() => {
          if (vantaRef.current && window.VANTA && window.VANTA.BIRDS) {
            vantaEffect.current = window.VANTA.BIRDS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              backgroundColor: 0xf5f3ed,   
              color1: 0x7a8a7c,           
              color2: 0xb48c3c,           
              
              birdSize: 0.9,
              wingSpan: 20.0,
              speedLimit: 2.5,
              separation: 20.0,
              alignment: 15.0,
              cohesion: 8.0,
              quantity: 4,     
              opacity: 0.25       
            });
          } else {
            console.error('VANTA.BIRDS not available. Available:', window.VANTA ? Object.keys(window.VANTA) : 'VANTA not loaded');
          }
        }, 500);
        
      } catch (error) {
        console.error('Failed to load Vanta.js BIRDS via CDN:', error);
      }
    };

    loadVanta();

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className={`absolute inset-0 ${className}`}
      style={{ zIndex: 0 }}
    >
      {children}
    </div>
  );
};

export default VantaBirds;