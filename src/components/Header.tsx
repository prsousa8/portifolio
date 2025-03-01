export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl p-4 bg-gradient-to-r from-yellow-200/80 via-pink-200/80 to-purple-200/80 text-gray-900 flex justify-between items-center rounded-2xl backdrop-blur-md shadow-lg z-50">
      <h1 className="text-xl font-bold">Meu Portfólio</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#about" className="hover:text-gray-600">Sobre</a></li>
          <li><a href="#skills" className="hover:text-gray-600">Habilidades</a></li>
          <li><a href="#projects" className="hover:text-gray-600">Projetos</a></li>
          <li><a href="#contact" className="hover:text-gray-600">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}