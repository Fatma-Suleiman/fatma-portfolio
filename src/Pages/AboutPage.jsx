import React from "react";
import AboutPortfolio from "../assets/aboutportfolio.jpg";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,

} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostman,
 SiTypescript,

} from "react-icons/si";


const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <FaReact /> },
    { name: "Typescript", icon: <SiTypescript/> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },


];

const tools = [
  { name: "Git/GitHub", icon: <FaGitAlt /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Postman", icon: <SiPostman /> },
];


function AnimatedCard({ item, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.08 }}
      className="relative group"
    >
      <div
        className="border border-green-400 rounded-xl p-6 flex flex-col items-center justify-center gap-4
                   text-green-400 bg-black
                   shadow-[0_0_0px_rgba(34,197,94,0.5)]
                   group-hover:shadow-[0_0_20px_rgba(34,197,94,0.7)]
                   transition-all duration-300"
      >
        <div className="text-5xl">{item.icon}</div>
        <p className="text-green-300 font-medium tracking-wide">
          {item.name}
        </p>
      </div>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <>
      <section
        id="about"
        className="w-full bg-white py-24 md:py-36 px-4"
      >
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10 md:gap-16 items-center">
          
          <div className="md:col-span-1 flex justify-center">
            <img
              className="w-[280px] rounded-xl shadow-2xl transition duration-500
                         hover:scale-[1.03] border-4 border-[#00df9a]"
              src={AboutPortfolio}
              alt="Fatma Suleiman Portfolio"
            />
          </div>

          <div className="md:col-span-2">
            <p className="text-[#00df9a] text-lg font-extrabold uppercase tracking-widest mb-2">
              Beyond the pixels, there's a purpose. Now, meet Fatma.
            </p>

            <h1 className="text-gray-900 md:text-5xl sm:text-4xl text-3xl font-black py-2 mb-6 border-b">
              Building Solutions Where Business Strategy Meets Frontend Excellence
            </h1>

            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              I don't just build interfaces; I architect digital solutions that
              serve a higher purpose. My journey began at Riara University, where
              Business and IT taught me technology is most powerful when it drives
              value.
            </p>

            <div className="bg-[#00df9a]/10 p-6 rounded-lg my-4 border-l-4 border-[#00df9a]">
              <h3 className="text-xl font-bold mb-2">
                My Core Focus: Impactful Code for a Clean Tomorrow
              </h3>
              <p className="italic">
                Passionate about sustainable energy, AI, IoT, and smart cities—
                using code to build a cleaner tomorrow aligned with Vision 2030.
              </p>
            </div>

            <p className="text-lg font-semibold">
              Let's connect and build something that matters.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-center text-white  text-2xl font-semibold mb-10">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((item, index) => (
                <AnimatedCard
                  key={index}
                  item={item}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-center text-white  text-2xl font-semibold mb-10">
              Tools
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {tools.map((item, index) => (
                <AnimatedCard
                  key={index}
                  item={item}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default AboutPage;
