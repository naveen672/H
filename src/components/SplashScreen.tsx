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
        <div className="mb-6 sm:mb-8 relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 sm:mb-6 relative">
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
            <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 border-2 border-amber-400 rounded-full animate-pulse opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border border-amber-300 rounded-full animate-ping opacity-30"></div>
          </div>
        </div>

        {/* Trust Name */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in px-4">
          T S Subbanna
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-amber-400 mb-6 sm:mb-8 animate-fade-in-delay px-4">
          Sarvajanika Education Trust
        </h2>

        {/* Tagline */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8 animate-fade-in-delay-2 px-4">
          <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
          <p className="text-base sm:text-lg lg:text-xl text-blue-100">Excellence in Education Since 1975</p>
          <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
        </div>

        {/* Loading indicator */}
        <div className="flex justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
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