// components/Hero.tsx
import Image from "next/image";
import image from "../../public/foto.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-blue-900 to-blue-500 relative">
      <div className="w-48 h-48 relative">
        <Image 
          src={image}
          alt="Ilustração representando desenvolvimento web"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2 className="text-4xl font-bold z-10 mt-4 mx-2 text-center">Olá, sou o Paulo Ricardo</h2>
      <p className="text-lg mt-2 z-10 mx-2 text-center">Desenvolvedor Front-end especializado em React e Next.js</p>
      
      {/* Gradiente na parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent"></div>
      {/* Redes Sociais */}
      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a href="https://github.com/prsousa8" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/pauloricardo8/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/pauloricardo_176/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
