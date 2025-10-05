import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "D&G Obras y Servicios",
      position: "Freelancer | Software Engineer",
      period: "Agosto 2025 - Presente",
      location: "Remoto",
      reference: "Maria Soledad Gonzales (Owner): +54 9 11 5226 6965",
      achievements: [
        "Diseñé e implementé una plataforma integral de gestión de personal, control de asistencia, reportes en tiempo real, stock de materiales y herrameintas, etc.",
        "Integración de autenticación JWT y manejo de fechas con Day.js para garantizar seguridad y trazabilidad",
        "Desarrollo de reportes en tiempo real para toma de decisiones rápidas",
        "Stack: React, Node.js, PostgreSQL, JWT, Day.js"
      ]
    },
    {
      company: "FK TECH SRL | Arcos Dorados",
      position: "Software Engineer Full Stack",
      period: "Junio 2024 - Agosto 2024",
      location: "Argentina",
      reference: "Jean Carlos Sayago (PM): +54 9 11 3493-4462",
      achievements: [
        "Construí y optimicé sistemas de gestión para +2.000 locales de Arcos Dorados usando React, Node.js y PostgreSQL",
        "Implementé herramientas para seguimiento de KPIs con integración a Notion",
        "Colaboré en proyectos .NET (C#, ASP.NET, SQL Server) para clientes en México",
        "Investigué y probé soluciones de IA en Python (Proyecto SCAI), aplicando innovación tecnológica",
        "Generé reportes y automatizaciones internas, reduciendo tiempos operativos en +20%"
      ]
    },
    {
      company: "FK TECH SRL | Arcos Dorados",
      position: "Analista Técnico Funcional",
      period: "Octubre 2022 - Junio 2024",
      location: "Argentina",
      reference: "Jean Carlos Sayago (PM): +54 9 11 3493-4462",
      achievements: [
        "Traduje requerimientos funcionales en especificaciones técnicas claras para el equipo de desarrollo",
        "Gestioné documentación en Jira, Confluence y Notion",
        "Participé activamente en ceremonias ágiles (daily, planning, retros)",
        "Brindé soporte a equipos multidisciplinarios, asegurando cumplimiento de objetivos y entregas on-time"
      ]
    },
    {
      company: "FK TECH SRL | Arcos Dorados",
      position: "Soporte Técnico Nivel 2",
      period: "Enero 2022 - Octubre 2022",
      location: "Argentina",
      reference: "Jean Carlos Sayago (PM): +54 9 11 3493-4462",
      achievements: [
        "Resolví incidentes críticos para más de 10.000 locales de Arcos Dorados",
        "Desarrollé scripts de automatización que redujeron en un 30% los tiempos de respuesta"
      ]
    },
    {
      company: "Colegio Maria Montessori",
      position: "Soporte Técnico",
      period: "Marzo 2021 - Enero 2022",
      location: "Argentina",
      reference: "Alejandro Viola (PO): +54 9 11 5773-9826",
      achievements: [
        "Mantenimiento preventivo y correctivo de estaciones de trabajo",
        "Soporte a usuarios y gestión de instalaciones en laboratorios educativos"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">Experiencia Laboral</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">{exp.position}</h3>
                  <h4 className="text-xl font-semibold text-amber-800 mb-1">{exp.company}</h4>
                  <div className="flex flex-col md:flex-row md:items-center text-amber-700">
                    <span className="mr-4">📅 {exp.period}</span>
                    <span>📍 {exp.location}</span>
                  </div>
                </div>
              </div>
              
              {exp.reference && (
                <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm text-orange-700">
                    <strong>Referencia:</strong> {exp.reference}
                  </p>
                </div>
              )}
              
              <div className="mt-4">
                <h5 className="font-semibold text-amber-800 mb-2">Logros principales:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">✓</span>
                      <span className="text-amber-700">{achievement}</span>
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
};

export default Experience;
