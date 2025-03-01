import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-8 text-center">
      <h3 className="text-3xl font-bold">Contato</h3>
      <p className="mt-4">Entre em contato pelo e-mail: prsousa.dev@gmail.com</p>
      
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
