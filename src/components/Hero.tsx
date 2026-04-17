import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 sticky top-0 text-center bg-gradient-to-b from-[#8ab4f8] to-[#ffe5d9]">
      <motion.div style={{ y, opacity }} className="max-w-4xl flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium italic tracking-tight mb-6 text-stone-900">
          Riya Kanury
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-stone-800 font-normal leading-relaxed max-w-3xl mb-10">
          A collection of unexpected adventures and intentional moments that shape the way I understand others
        </p>
        <div className="flex gap-4">
          <a href="mailto:hello@example.com" className="p-3 bg-white/60 backdrop-blur-sm text-stone-900 rounded-full hover:bg-white transition-colors shadow-sm">
            <Mail size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/60 backdrop-blur-sm text-stone-900 rounded-full hover:bg-white transition-colors shadow-sm">
            <Linkedin size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
