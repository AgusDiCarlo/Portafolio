import React from 'react';

const Contact = () => (
  <section id="contact" className="py-16 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-6">¡Trabajemos juntos!</h3>
          <p className="text-amber-100 mb-8 text-lg">
            Estoy disponible para proyectos de desarrollo full stack, consultoría técnica y oportunidades de colaboración. 
            No dudes en contactarme para discutir cómo puedo ayudar a hacer realidad tus ideas.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl mr-4">📧</span>
              <a 
                href="mailto:agus_di_carlo@hotmail.com" 
                className="text-amber-100 hover:text-white transition-colors"
              >
                agus_di_carlo@hotmail.com
              </a>
            </div>
            
            <div className="flex items-center">
              <span className="text-2xl mr-4">📱</span>
              <a 
                href="tel:+541150231615" 
                className="text-amber-100 hover:text-white transition-colors"
              >
                +54 11 5023 1615
              </a>
            </div>
            
            <div className="flex items-center">
              <span className="text-2xl mr-4">📍</span>
              <span className="text-amber-100">Adrogué, Buenos Aires, Argentina</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-2xl mr-4">💼</span>
              <a 
                href="https://www.linkedin.com/in/agustin-di-carlo-a51a2a1a7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            
            <div className="flex items-center">
              <span className="text-2xl mr-4">🐙</span>
              <a 
                href="https://github.com/AgusDiCarlo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-white transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm border border-amber-200">
          <h4 className="text-xl font-semibold mb-6">Información de Referencias</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">Jean Carlos Sayago (PM)</h5>
              <p className="text-amber-100">+54 9 11 3493-4462</p>
              <p className="text-sm text-amber-200">FK TECH SRL - Arcos Dorados</p>
            </div>
            <div>
              <h5 className="font-semibold">Alejandro Viola (PO)</h5>
              <p className="text-amber-100">+54 9 11 5773-9826</p>
              <p className="text-sm text-amber-200">Colegio Maria Montessori</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-amber-200">
          © 2025 Agustín Di Carlo. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
