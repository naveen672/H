import React, { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500); // Allow fade-out animation to complete
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center text-white">
        {/* Portrait Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-2">
              <div className="w-full h-full bg-white rounded-full p-1">
                <img 
                  src="/image.png" 
                  alt="T S Subbanna" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Animated rings around portrait */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 border-2 border-amber-400 rounded-full animate-pulse opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border border-amber-300 rounded-full animate-ping opacity-30"></div>
          </div>
        </div>

        {/* Trust Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          T S Subbanna
        </h1>
        <h2 className="text-2xl md:text-3xl text-amber-400 mb-8 animate-fade-in-delay">
          Sarvajanika Education Trust
        </h2>

        {/* Tagline */}
        <div className="flex items-center justify-center space-x-3 mb-8 animate-fade-in-delay-2">
          <GraduationCap className="h-8 w-8 text-amber-400" />
          <p className="text-xl text-blue-100">Excellence in Education Since 1975</p>
          <GraduationCap className="h-8 w-8 text-amber-400" />
        </div>

        {/* Loading indicator */}
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;