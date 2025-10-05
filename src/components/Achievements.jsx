import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Reducción de Tiempos Operativos",
      description: "Implementé automatizaciones que redujeron los tiempos de respuesta en 30%",
      icon: "⚡",
      metric: "30%",
      company: "FK TECH SRL",
      year: "2022"
    },
    {
      title: "Mejora en Eficiencia",
      description: "Generé reportes y automatizaciones que mejoraron la eficiencia operativa en 20%",
      icon: "📈",
      metric: "20%",
      company: "FK TECH SRL",
      year: "2024"
    },
    {
      title: "Gestión de Escala Masiva",
      description: "Construí sistemas para gestionar más de 2,000 locales de Arcos Dorados",
      icon: "🏢",
      metric: "2,000+",
      company: "Arcos Dorados",
      year: "2024"
    },
    {
      title: "Soporte Crítico",
      description: "Resolví incidentes críticos para más de 10,000 locales",
      icon: "🔧",
      metric: "10,000+",
      company: "Arcos Dorados",
      year: "2022"
    },
    {
      title: "Innovación en IA",
      description: "Investigué y desarrollé soluciones de IA aplicadas a procesos empresariales",
      icon: "🤖",
      metric: "SCAI",
      company: "FK TECH SRL",
      year: "2024"
    },
    {
      title: "Certificaciones Técnicas",
      description: "Completé múltiples certificaciones en tecnologías clave del mercado",
      icon: "🏆",
      metric: "8+",
      company: "Diversas plataformas",
      year: "2022-2024"
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Inicio en Soporte Técnico",
      description: "Comencé mi carrera profesional en Colegio Maria Montessori"
    },
    {
      year: "2022",
      title: "Salto a Enterprise",
      description: "Me uní a FK TECH SRL para trabajar con Arcos Dorados"
    },
    {
      year: "2023",
      title: "Evolución a Análisis Funcional",
      description: "Transición a roles más técnicos y de análisis"
    },
    {
      year: "2024",
      title: "Desarrollo Full Stack",
      description: "Especialización completa en desarrollo frontend y backend"
    },
    {
      year: "2025",
      title: "Lanzamiento como Freelancer",
      description: "Me establecí como desarrollador independiente, trabajando en proyectos diversos"
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-800 mb-4">Logros & Reconocimientos</h2>
          <p className="text-xl text-amber-700">Métricas y hitos de mi carrera profesional</p>
        </div>
        
        {/* Logros principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover-lift border border-amber-100 relative overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3 group-hover:animate-pulse">{achievement.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">{achievement.metric}</div>
                    <div className="text-xs text-amber-600">{achievement.year}</div>
                  </div>
                </div>
                
                <h3 className="font-bold text-amber-800 mb-2">{achievement.title}</h3>
                <p className="text-sm text-amber-700 mb-3">{achievement.description}</p>
                <p className="text-xs text-orange-600 font-semibold">{achievement.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline de hitos */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100">
          <h3 className="text-2xl font-bold text-amber-800 mb-8 text-center">Evolución Profesional</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 hover-scale">
                      <div className="text-amber-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="font-bold text-amber-800 mb-2">{milestone.title}</h4>
                      <p className="text-amber-700">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
