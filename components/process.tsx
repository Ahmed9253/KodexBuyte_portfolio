'use client';

import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your vision, audience, and goals before writing a line of code.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crafting interfaces and experiences that are intuitive and human-centered.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Developing with modern tools, clean architecture, and rigorous quality checks.',
  },
  {
    number: '04',
    title: 'Scale',
    description: 'Launching, monitoring, and iterating to ensure lasting growth and impact.',
  },
];

export default function Process() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-[#2A2A2E]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          How we work
        </h2>
        <p className="text-white/50 text-base sm:text-lg max-w-xl mb-16">
          A straightforward process that keeps everyone aligned.
        </p>

        <div className="relative">
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-white/10" />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative pl-10 sm:pl-12"
              >
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-[#CEAA99] bg-[#2A2A2E] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#CEAA99]" />
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#CEAA99]/60">
                    Step {step.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/50 mt-2 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
