import React from 'react';

const Education = () => {
  const education = [
    {
      title: "Licenciatura en Sistemas",
      institution: "Universidad Nacional de Lanús",
      period: "2019 - Actualidad",
      description: "Formación académica en sistemas de información con enfoque en desarrollo de software"
    },
    {
      title: "Bachiller en Ciencias Naturales",
      institution: "Colegio Nuestra Señora de Luján",
      period: "2017",
      description: "Educación secundaria con orientación en ciencias naturales"
    }
  ];

  const academicProjects = [
    "Participación en proyectos académicos con Java + Spring Boot, aplicando programación orientada a objetos",
    "Desarrollo de APIs REST con manejo de bases de datos no relacionales (Redis)",
    "Trabajo en equipo bajo enfoque ágil, simulando entornos de desarrollo profesional"
  ];

  const certifications = [
    { name: "ReactJS Developer", institution: "Educación IT" },
    { name: "TypeScript", institution: "Platzi" },
    { name: "PostgreSQL", institution: "Platzi" },
    { name: "Docker Fundamentos", institution: "Platzi" },
    { name: "OpenAI API", institution: "Platzi" },
    { name: "Fundamentos de Programación con SQL Server 2019", institution: "Educación IT" },
    { name: "Data e Inteligencia Artificial para Empresas", institution: "Platzi" },
    { name: "+20 cursos extra", institution: "Diversas plataformas" }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">Formación Académica</h2>
        
        {/* Educación */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-amber-800 mb-6">🎓 Educación</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-amber-100">
                <h4 className="text-xl font-bold text-orange-600 mb-2">{edu.title}</h4>
                <h5 className="text-lg font-semibold text-amber-800 mb-1">{edu.institution}</h5>
                <p className="text-amber-700 mb-2">📅 {edu.period}</p>
                <p className="text-amber-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proyectos Académicos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-amber-800 mb-6">📚 Proyectos Académicos</h3>
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <ul className="space-y-3">
              {academicProjects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span className="text-amber-700">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certificaciones */}
        <div>
          <h3 className="text-2xl font-bold text-amber-800 mb-6">🏆 Certificaciones</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-amber-800 mb-1">{cert.name}</h4>
                <p className="text-sm text-amber-700">{cert.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
