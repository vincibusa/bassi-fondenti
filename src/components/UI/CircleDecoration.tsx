import { motion } from "framer-motion";

interface CircleDecorationProps {
  size?: string;
  position?: string;
  delay?: number;
  duration?: number;
  color?: string;
}

const CircleDecoration: React.FC<CircleDecorationProps> = ({
  size = "w-32 h-32",
  position = "top-[20%] right-[10%]",
  delay = 0,
  duration = 8,
  color = "border-white/20"
}) => {
  return (
    <motion.div 
      className={`absolute ${position} ${size} rounded-full border ${color}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        opacity: [0.3, 0.6, 0.3] 
      }}
      transition={{ 
        delay,
        duration,
        ease: "easeInOut", 
        repeat: Infinity 
      }}
    />
  );
};

export default CircleDecoration;
