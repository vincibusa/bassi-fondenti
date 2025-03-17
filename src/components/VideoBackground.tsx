// src/components/VideoBackground.tsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import VideoBack from "../assets/videoDef.mp4";
import { useTranslation } from "react-i18next";

interface VideoBackgroundProps {
  onReservationClick: () => void;
  onMenuClick: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  onReservationClick,
  onMenuClick
}) => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Rimuovo useScroll e useTransform che causavano il problema
  
  return (
    <>
      {!videoLoaded && <Loader />}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative h-screen w-full overflow-hidden"
        style={{ display: videoLoaded ? "block" : "none" }}
      >
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setVideoLoaded(true)}
            className="w-full h-full object-cover"
          >
            <source src={VideoBack} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Modern gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/50" />
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full border border-white/20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4] 
          }}
          transition={{ 
            duration: 8,
            ease: "easeInOut", 
            repeat: Infinity 
          }}
        />
        
        {/* Content container - rimossa la dipendenza dal parallasse */}
        <motion.div 
          className="relative w-full h-full flex flex-col items-center justify-center px-4 lg:px-16 text-center"
        >
          <div className="flex flex-col items-start w-full px-8 md:px-16 lg:px-24">
            {/* Title - rimosso l'effetto parallasse */}
            <div className="text-left mb-12 mix-blend-difference">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold text-white mb-0 leading-[0.9] tracking-tighter"
              >
                Bassi
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold text-white leading-[0.9] tracking-tighter"
              >
                Fondenti
              </motion.h1>
            </div>
            
            {/* Buttons with modern animations */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6 z-10"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 15px rgba(255,255,255,0.3)" 
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-white px-10 py-4 rounded-md font-medium transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
                onClick={onReservationClick}
              >
                {t("reservationButton")}
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: "rgba(255,255,255,0.9)",
                  color: "#000" 
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/80 backdrop-blur-sm text-primary px-10 py-4 rounded-md font-medium transition-all duration-300"
                onClick={onMenuClick}
              >
                {t("viewMenuButton")}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default VideoBackground;