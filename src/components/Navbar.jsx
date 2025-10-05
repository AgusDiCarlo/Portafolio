import React from 'react';

const Navbar = () => (
  <nav className="bg-gradient-to-r from-amber-800 to-orange-700 p-6 text-white shadow-lg sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold hover:animate-pulse cursor-pointer">Agustín Di Carlo</h1>
      
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="hover:text-amber-200 transition-colors hover:scale-105">Sobre mí</a>
        <a href="#techstack" className="hover:text-amber-200 transition-colors hover:scale-105">Tecnologías</a>
        <a href="#achievements" className="hover:text-amber-200 transition-colors hover:scale-105">Logros</a>
        <a href="#experience" className="hover:text-amber-200 transition-colors hover:scale-105">Experiencia</a>
        <a href="#projects" className="hover:text-amber-200 transition-colors hover:scale-105">Proyectos</a>
        <a href="#contact" className="hover:text-amber-200 transition-colors hover:scale-105">Contacto</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
