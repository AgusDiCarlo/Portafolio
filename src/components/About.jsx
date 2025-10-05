import React from 'react';

const About = () => (
  <section id="about" className="py-16 bg-amber-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-amber-800 mb-6">Software Engineer</h2>
          <div className="space-y-4 text-amber-700 leading-relaxed">
            <p className="text-lg">
              Desarrollador Full Stack con experiencia progresiva en soporte técnico → análisis funcional → desarrollo full stack.
            </p>
            <p>
              Especializado en <span className="font-semibold text-orange-600">React</span>, <span className="font-semibold text-orange-600">Node.js</span>, <span className="font-semibold text-orange-600">TypeScript</span>, <span className="font-semibold text-orange-600">PostgreSQL</span> y <span className="font-semibold text-orange-600">SQL Server</span>, con sólida práctica en automatización, reporting de KPIs, integración de APIs y metodologías ágiles (Scrum).
            </p>
            <p>
              Apasionado por crear soluciones escalables e innovadoras, con orientación a la mejora continua, eficiencia de procesos y calidad del software.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-amber-500 animate-float hover:animate-glow">
            <img 
              src="/images/profile-photo.jpg" 
              alt="Agustín Di Carlo - Software Engineer"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-center" style={{display: 'none'}}>
              <div>
                <div className="text-6xl mb-2 animate-pulse">👨‍💻</div>
                <p className="text-sm font-medium">Agustín Di Carlo</p>
                <p className="text-xs mt-2 opacity-75">Coloca tu foto en /public/images/profile-photo.jpg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
