import React from 'react';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Lenguajes & Frameworks",
      skills: ["JavaScript", "TypeScript", "Node.js", "React", "Java", "Spring Boot", "SQL", ".NET (C#)", "Python"],
      icon: "💻"
    },
    {
      title: "Bases de datos",
      skills: ["PostgreSQL", "SQL Server", "MySQL", "Redis"],
      icon: "🗄️"
    },
    {
      title: "DevOps & Herramientas",
      skills: ["Git", "Docker", "AWS", "CI/CD", "OpenAI API", "Gemini API", "ChatGPT API"],
      icon: "⚙️"
    },
    {
      title: "Metodologías",
      skills: ["Agile/Scrum", "Unit Testing", "RESTful APIs"],
      icon: "📋"
    },
    {
      title: "IA & Automatización",
      skills: ["ChatGPT", "GitHub Copilot", "Gemini", "Integración con APIs externas"],
      icon: "🤖"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-800 mb-12">Skills & Competencias</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-amber-100">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-amber-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-amber-800 mb-6">Idiomas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-6 py-3 rounded-full border border-amber-200">
              <span className="font-medium">Inglés Intermedio (B2)</span>
            </div>
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-6 py-3 rounded-full border border-amber-200">
              <span className="font-medium">Español Nativo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
