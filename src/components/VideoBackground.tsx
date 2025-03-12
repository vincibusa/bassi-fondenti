// src/components/VideoBackground.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import VideoBack from "../assets/videoDef.mp4";

// Removed logo import as we'll use text instead
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

  return (
    <>
      {!videoLoaded && <Loader />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full"
        style={{ display: videoLoaded ? "block" : "none" }}
      >
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setVideoLoaded(true)}
            className="w-full h-full object-cover opacity-75"
          >
            <source src={VideoBack} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center px-4 lg:px-16 text-center">
          <div className="flex flex-col items-start w-full px-8 md:px-16 lg:px-24">
            {/* Even larger text with left alignment */}
            <div className="text-left mb-8">
              <h1 className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold text-white mb-2 leading-none">Bassi</h1>
              <h1 className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold text-white leading-none">Fondenti</h1>
            </div>
           
              <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-medium"
                  onClick={onReservationClick}
                >
                   {t("reservationButton")}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-3 rounded-lg font-medium"
                  onClick={onMenuClick}
                >
                {t("viewMenuButton")}
                </motion.button>
              </div>
         
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default VideoBackground;