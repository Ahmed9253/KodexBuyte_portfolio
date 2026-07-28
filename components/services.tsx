'use client';

import { motion } from 'motion/react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern websites and web applications built for performance and scale.',
    image: '/webdevelopment.jpeg',
    span: 'lg:col-span-2 lg:row-span-2 min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem]',
  },
  {
    title: 'Android App Development',
    description: 'Native Android applications with seamless user experiences.',
    image: '/appdevelopment.jpeg',
    span: 'min-h-[12rem] sm:min-h-[14rem] lg:min-h-[15rem]',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that automate, predict, and optimize.',
    image: '/ai and machine learning.jpeg',
    span: 'min-h-[12rem] sm:min-h-[14rem] lg:min-h-[15rem]',
  },
  {
    title: 'Graphic Designing',
    description: 'Brand identities and visuals that communicate your vision.',
    image: '/graphics design.jpeg',
    span: 'lg:col-span-2 min-h-[14rem] sm:min-h-[16rem]',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that grow your online presence.',
    image: '/digital marketing.jpeg',
    span: 'min-h-[14rem] sm:min-h-[16rem]',
  },
  {
    title: 'SEO',
    description: 'Search strategies that drive traffic and improve rankings.',
    image: '/seo.jpeg',
    span: 'lg:col-span-3 min-h-[10rem] sm:min-h-[12rem]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-6 bg-[#1E1E22]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
        >
          What we do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/50 text-base sm:text-lg max-w-xl mb-12 sm:mb-16"
        >
          From concept to launch, we deliver across the full digital spectrum.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.015 }}
              className={`relative group overflow-hidden bg-[#2A2A2E] cursor-default ${service.span}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E22] via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-[#CEAA99]/10"
              />
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.15 }}
                  className="text-xl sm:text-2xl font-bold text-white"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.25 }}
                  className="text-sm sm:text-base text-white/60 mt-2 max-w-xs"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
