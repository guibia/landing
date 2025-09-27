import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const logoSets = [
  ["Rappi", "Davivienda", "Domino's Pizza", "Farmatodo", "Nutresa"],
  ["Bancolombia", "Avianca", "Grupo Éxito", "Bavaria", "Alpina"]
];

export default function AnimatedLogos() {
  const [currentSet, setCurrentSet] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation for all logos simultaneously
      setIsAnimatingOut(true);
      
      // After exit animation completes, switch sets and reset
      setTimeout(() => {
        setCurrentSet(prev => (prev + 1) % logoSets.length);
        setIsAnimatingOut(false);
      }, 400); // Match the transition duration

    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentLogos = logoSets[currentSet];

  return (
    <div className="mt-24">
      <p className="text-center text-sm text-gray-400 mb-6">
        Empresas líderes que ya están con nosotros
      </p>
      <div className="flex items-center justify-center space-x-12 opacity-60 h-8">
        <AnimatePresence mode="wait">
          {currentLogos.map((logo, index) => (
            <motion.div
              key={`${currentSet}-${logo}-${index}`}
              className="text-gray-400 font-medium whitespace-nowrap"
              initial={{ 
                opacity: 0, 
                scale: 0.5, 
                filter: "blur(4px)" 
              }}
              animate={{ 
                opacity: isAnimatingOut ? 0 : 1,
                scale: isAnimatingOut ? 0.5 : 1,
                filter: isAnimatingOut ? "blur(4px)" : "blur(0px)"
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.5, 
                filter: "blur(4px)" 
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut"
              }}
            >
              {logo}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}