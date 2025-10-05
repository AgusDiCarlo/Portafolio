import React from 'react';

const projects = [
  {
    name: 'Plataforma de Gestión de Personal',
    company: 'D&G Obras y Servicios',
    description: 'Sistema integral para gestión de personal y control de asistencia con autenticación JWT y reportes en tiempo real.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Day.js'],
    features: [
      'Control de asistencia automatizado',
      'Autenticación segura con JWT',
      'Reportes en tiempo real',
      'Trazabilidad completa de datos'
    ],
    period: '2025 - Presente'
  },
  {
    name: 'Sistema de Gestión para Arcos Dorados',
    company: 'FK TECH SRL',
    description: 'Plataforma optimizada para gestión de +2.000 locales con integración de KPIs y herramientas de seguimiento.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SQL Server'],
    features: [
      'Gestión de múltiples locales',
      'Integración con Notion para KPIs',
      'Automatizaciones internas',
      'Reducción de tiempos operativos en 20%'
    ],
    period: '2024'
  },
  {
    name: 'Proyecto SCAI - Soluciones de IA',
    company: 'FK TECH SRL',
    description: 'Investigación y desarrollo de soluciones de inteligencia artificial aplicadas a procesos empresariales.',
    technologies: ['Python', 'APIs de IA', 'Integración de sistemas'],
    features: [
      'Investigación en tecnologías de IA',
      'Integración con APIs externas',
      'Automatización de procesos',
      'Innovación tecnológica aplicada'
    ],
    period: '2024'
  },
  {
    name: 'Scripts de Automatización',
    company: 'FK TECH SRL',
    description: 'Herramientas de automatización para soporte técnico que redujeron tiempos de respuesta en 30%.',
    technologies: ['Scripts personalizados', 'Automatización', 'Soporte técnico'],
    features: [
      'Automatización de procesos críticos',
      'Reducción de tiempos de respuesta',
      'Soporte para +10.000 locales',
      'Mejora en eficiencia operativa'
    ],
    period: '2022'
  }
];

const Projects = () => (
  <section id="projects" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-orange-600">{project.name}</h3>
              <span className="text-sm text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                {project.period}
              </span>
            </div>
            
            <h4 className="text-lg font-semibold text-amber-800 mb-2">{project.company}</h4>
            <p className="text-amber-700 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h5 className="font-semibold text-amber-800 mb-2">Tecnologías:</h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-amber-800 mb-2">Características principales:</h5>
              <ul className="space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-amber-700">
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
