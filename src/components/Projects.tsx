"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Projeto Pokedex",
    description:
      "Aqui, você encontrará informações detalhadas sobre seus personagens favoritos, desde seus nomes, habilidades especiais e características até curiosidades que vão surpreender até os fãs mais dedicados. Navegue, descubra e mergulhe no universo Pokémon de uma forma única e interativa!",
    image: "/pokedex.svg",
    category: "DESENVOLVIMENTO WEB",
    date: "07 Fev",
  },
  {
    title: "Projeto Rick and Morty",
    description:
      "Este projeto tem o objetivo de explorar o Universo de Rick and Morty, mostrando informações dos seus personagens e estatísticas no desenvolvimento da animação.",
    image: "/rick.svg",
    category: "DESENVOLVIMENTO WEB",
    date: "07 Fev",
  },
  {
    title: "Projeto Tatucash",
    description:
      "Em uma sociedade cada vez mais complexa e interconectada, essas questões são exacerbadas pela crescente facilidade de acesso ao crédito e ao consumo desenfreado, sem o devido conhecimento sobre gestão financeira. É nesse contexto que a plataforma TatuCash, se destaca como uma iniciativa crucial para difundir a educação financeira e promover a segurança econômica.",
    image: "/Tatucash.png",
    category: "DESENVOLVIMENTO WEB",
    date: "07 Fev",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-8">
      <motion.h3
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projetos
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={400}
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 font-semibold">
                {project.date} • {project.category}
              </p>
              <h4 className="text-xl font-bold text-gray-900 mt-2">
                {project.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
