import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const thoughts = [
  {
    title: "Inner World",
    description: "Inspiration for me comes through paying attention to moments that feel cinematic. The world becomes most alive through the hidden cafe next to the pond, the mysterious dirt path surrounded by trees, and the book that immerses me into a fantastical world for hours."
  },
  {
    title: "Deep Conversations",
    description: "The conversations that pile one question after another tend to be my favorite. Each pause of reflection seems to slow down reality. As I absorb new perspectives and listen to different ideas, my curiosity about how people think expands."
  },
  {
    title: "Shared Spaces",
    description: "I’ve learned to notice the energy that ties a room of strangers together – from the creative flow at a hackathon to the sense of wonder at a science fair to the electric intensity of a concert. My experiences at these events deepened my desire to design such an environment for others."
  },
  {
    title: "Side Quests",
    description: "I always feel drawn to trying new things. Stepping into unfamiliar situations has created a sense of strength that pulls me through discomfort. That’s how l’ve found joy in karate, running, boxing, and dance."
  }
];

export function HowIThink() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, (pos) => `calc(${pos * -100}% + ${pos * 100}vw)`);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-24 left-6 md:left-12 lg:left-24">
          <h2 className="text-xl md:text-2xl font-medium tracking-wide text-stone-800">How I think</h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-12 px-6 md:px-12 lg:px-24 pt-24 w-max">
          {thoughts.map((item, index) => (
            <div key={index} className="w-[85vw] md:w-[60vw] lg:w-[40vw] shrink-0 flex flex-col gap-8 justify-center h-full">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900">{item.title}</h3>
              <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-normal">{item.description}</p>
            </div>
          ))}
          <div className="w-[6vw] md:w-[12vw] lg:w-[24vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
