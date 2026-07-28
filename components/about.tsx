'use client';

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-[#2A2A2E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Technology built around your goals.
            </h2>
            <div className="mt-8 space-y-5 text-white/60 leading-relaxed">
              <p>
                Kodex Byte is a digital technology company that partners with businesses
                to create products that make a real impact. We combine strategic thinking
                with technical execution.
              </p>
              <p>
                Our team works across web, mobile, AI, design, and marketing to deliver
                end-to-end solutions. We believe in clean code, clear communication,
                and building things that last.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-[#1E1E22] p-6 rounded">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/50 mt-1">Projects delivered</div>
              </div>
              <div className="bg-[#1E1E22] p-6 rounded">
                <div className="text-3xl font-bold text-white">4.9</div>
                <div className="text-sm text-white/50 mt-1">Client rating</div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-[#1E1E22] p-6 rounded">
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-white/50 mt-1">Team members</div>
              </div>
              <div className="bg-[#1E1E22] p-6 rounded">
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-sm text-white/50 mt-1">Service areas</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
