import { motion } from "framer-motion";

export default function Lighting({ children }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
  
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-2/6 md:w-4/6 h-1/2 bg-[#a78bfa] blur-3xl opacity-20"
        animate={{ 
          y: ["-50%", "50%", "-50%"],
          opacity: [0.2, 0.5, 0.2] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full py-4 bg-[#24242404] backdrop-blur-md rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}
