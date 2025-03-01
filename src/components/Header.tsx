"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {!isMenuOpen && (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl p-4 bg-gradient-to-r from-yellow-200/80 via-pink-200/80 to-purple-200/80 text-gray-900 flex justify-between items-center rounded-2xl backdrop-blur-md shadow-lg z-50 transition-opacity duration-300 ease-in-out">
          <h1 className="text-xl font-bold">Meu Portfólio</h1>
          <nav className="hidden md:block">
            <ul className="flex gap-4">
              <li><a href="#about" className="hover:text-gray-600">Sobre</a></li>
              <li><a href="#skills" className="hover:text-gray-600">Habilidades</a></li>
              <li><a href="#projects" className="hover:text-gray-600">Projetos</a></li>
              <li><a href="#contact" className="hover:text-gray-600">Contato</a></li>
            </ul>
          </nav>
          <button
            ref={buttonRef}
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </header>
      )}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-1/2 bg-gradient-to-r from-yellow-200/80 via-pink-200/80 to-purple-200/80 text-gray-900 shadow-lg p-6 flex flex-col items-center justify-center z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
          aria-label="Fechar menu"
        >
          ✖
        </button>
        <ul className="flex flex-col gap-6 text-xl">
          <li><a href="#about" className="hover:text-gray-600" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#skills" className="hover:text-gray-600" onClick={closeMenu}>Habilidades</a></li>
          <li><a href="#projects" className="hover:text-gray-600" onClick={closeMenu}>Projetos</a></li>
          <li><a href="#contact" className="hover:text-gray-600" onClick={closeMenu}>Contato</a></li>
        </ul>
      </div>
    </>
  );
}
