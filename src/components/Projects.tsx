import { motion } from "motion/react";

const projects = [
  {
    name: "Dreamventure Hackathon",
    description: "I wanted to create a space that felt more imaginative than a typical hackathon - one that pushed students to think beyond the expected. The process was more uncertain than I anticipated: reaching out, navigating setbacks as I went, and building something without fully knowing if it would come together. In the end, with my team, I brought students across Massachusetts into an experience blending creativity and entrepreneurship."
  },
  {
    name: "Beyond the Board",
    description: "Chess taught me how to approach life. It began with learning to slow down and think ahead, but it didn’t end there. I saw how something as simple as a chessboard could create connections between people from completely different backgrounds. Through sessions where I teach and play chess with younger and older participants at libraries and shelters, I found how easily a game could turn into a conversation about patience and resilience."
  },
  {
    name: "Healia",
    description: "I started Healia, a platform that provides personalized wound care guidance using a simple photo and a few symptom questions, through entrepreneurship programs like TYE and my own experiences babysitting. It became more real after talking to people who access healthcare differently depending on where they live. Speaking at the ISF Global AI Summit and meeting students from rural India challenged me to design a platform for the people who actually need it."
  }
];

export function Projects() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-xl md:text-2xl font-medium tracking-wide text-stone-800 mb-16"
      >
        Selected Projects
      </motion.h2>
      
      <div className="flex flex-col gap-24">
        {projects.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6 max-w-4xl"
          >
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">{item.name}</h3>
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-normal">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-24"
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-stone-900/10 hover:bg-stone-900/20 text-stone-900 font-medium rounded-full transition-colors text-lg backdrop-blur-sm">
          View Resume
        </a>
      </motion.div>
    </section>
  );
}
