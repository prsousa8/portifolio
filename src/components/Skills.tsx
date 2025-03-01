"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaFigma } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "FIGMA", icon: <FaFigma className="text-pink-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JAVASCRIPT", icon: <FaJs className="text-yellow-500" /> },
  { name: "PYTHON", icon: <FaPython className="text-yellow-400" /> },
  { name: "REACT", icon: <FaReact className="text-blue-400" /> },
  { name: "MYSQL", icon: <SiMysql className="text-blue-600" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="p-8 text-center">
      <h3 className="text-3xl font-bold mb-6">Habilidades</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="mt-2 font-semibold text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
