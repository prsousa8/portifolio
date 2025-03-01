// components/Hero.tsx
import Image from "next/image";
import image from "../../public/foto.svg";

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
      <h2 className="text-4xl font-bold z-10 mt-4">Olá, sou o Paulo Ricardo</h2>
      <p className="text-lg mt-2 z-10">Desenvolvedor Front-end especializado em React e Next.js</p>
      
      {/* Gradiente na parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  );
}
