"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl p-4 bg-gradient-to-r from-yellow-200/80 via-pink-200/80 to-purple-200/80 text-gray-900 flex justify-between items-center rounded-2xl backdrop-blur-md shadow-lg z-50">
      <h1 className="text-xl font-bold">Meu Portfólio</h1>
      
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li><a href="#about" className="hover:text-gray-600">Sobre</a></li>
          <li><a href="#skills" className="hover:text-gray-600">Habilidades</a></li>
          <li><a href="#projects" className="hover:text-gray-600">Projetos</a></li>
          <li><a href="#contact" className="hover:text-gray-600">Contato</a></li>
        </ul>
      </nav>
      
      {/* Menu Button for small screens */}
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        ☰
      </button>

      {/* Dropdown Menu for small screens */}
      {isMenuOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-gradient-to-r from-yellow-200/80 via-pink-200/80 to-purple-200/80 text-gray-900 rounded-2xl shadow-lg p-4">
          <ul className="flex flex-col gap-4">
            <li><a href="#about" className="hover:text-gray-600">Sobre</a></li>
            <li><a href="#skills" className="hover:text-gray-600">Habilidades</a></li>
            <li><a href="#projects" className="hover:text-gray-600">Projetos</a></li>
            <li><a href="#contact" className="hover:text-gray-600">Contato</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
