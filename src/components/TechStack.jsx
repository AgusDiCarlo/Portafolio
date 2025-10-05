import React from 'react';

const TechStack = () => {
  const technologies = [
    {
      name: "Java",
      icon: "♨️",
      level: 70,
      description: "Desarrollo de aplicaciones empresariales"
    },
    {
      name: "React",
      icon: "⚛️",
      level: 60,
      description: "Desarrollo de interfaces modernas y reactivas"
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 70,
      description: "Backend escalable y APIs REST"
    },
    {
      name: "TypeScript",
      icon: "🔷",
      level: 70,
      description: "JavaScript tipado para mayor robustez"
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      level: 80,
      description: "Base de datos relacional avanzada"
    },
    {
      name: "SQL Server",
      icon: "🗄️",
      level: 80,
      description: "Gestión de datos empresariales"
    },
    {
      name: ".NET",
      icon: "🔷",
      level: 50,
      description: "Desarrollo de aplicaciones empresariales"
    },
    {
      name: "Docker",
      icon: "🐳",
      level: 70,
      description: "Containerización y deployment"
    },
    {
      name: "AWS",
      icon: "☁️",
      level: 50,
      description: "Cloud computing y servicios"
    },
    {
      name: "Python",
      icon: "🐍",
      level: 65,
      description: "Automatización y proyectos de IA"
    },
    {
      name: "Redis",
      icon: "🔴",
      level: 70,
      description: "Cache y bases de datos NoSQL"
    },
    {
      name: "Git",
      icon: "📝",
      level: 70,
      description: "Control de versiones y colaboración"
    },
    {
      name: "JWT",
      icon: "🔐",
      level: 70,
      description: "Autenticación y autorización segura"
    }
  ];

  return (
    <section id="techstack" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-800 mb-4">Stack Tecnológico</h2>
          <p className="text-xl text-amber-700">Tecnologías que domino y uso en mis proyectos</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover-lift border border-amber-100 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:animate-pulse">{tech.icon}</div>
                <h3 className="font-bold text-amber-800 mb-2">{tech.name}</h3>
                <p className="text-sm text-amber-600 mb-4">{tech.description}</p>
                
                {/* Barra de progreso */}
                <div className="w-full bg-amber-100 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                <span className="text-xs font-semibold text-amber-700">{tech.level}%</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Estadísticas adicionales */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg hover-scale">
            <div className="text-3xl font-bold text-orange-600 mb-2">3+</div>
            <div className="text-amber-700 font-semibold">Años de experiencia</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover-scale">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-amber-700 font-semibold">Proyectos completados</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover-scale">
            <div className="text-3xl font-bold text-orange-600 mb-2">2K+</div>
            <div className="text-amber-700 font-semibold">Locales gestionados</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover-scale">
            <div className="text-3xl font-bold text-orange-600 mb-2">30%</div>
            <div className="text-amber-700 font-semibold">Mejora en eficiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
