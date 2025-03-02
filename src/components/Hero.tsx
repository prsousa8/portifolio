import Image from "next/image";
import image from "../../public/foto.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">
      {/* Vídeo de fundo */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Gradiente para melhor leitura do texto */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/20 to-transparent z-0"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-48 h-48 relative">
          <Image 
            src={image}
            alt="Ilustração representando desenvolvimento web"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2 className="text-4xl font-bold mt-4 mx-2 text-center">Olá, sou o Paulo Ricardo</h2>
        <p className="text-lg mt-2 mx-2 text-center">Desenvolvedor Front-end especializado em React e Next.js</p>

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
      </div>
    </section>
  );
}
