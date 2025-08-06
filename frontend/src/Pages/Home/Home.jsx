import { Link } from 'react-router-dom'
import background from '../../assets/background.jpg'
import stack from '../../assets/stack.png'
import skills from '../../assets/skills.png'
import gitGitHub from '../../assets/git-github.png'
import './Home.css'

function Home() {
  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center home-section"
        style={{
          backgroundImage: `url(${background})`, // ✅ esta es la forma correcta
        }}
      >
        <div className="text-white text-center bg-black/50 p-8 rounded-xl backdrop-blur-sm max-w-lg mx-4 to-see">
          <Link
            to="/proyectos"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition projects"
          >
            Ver proyectos
          </Link>
        </div>

      </section>
      <section className="intro">
        <h1>¡Hola! Soy<Link to="/sobre-mi" className="about-link">Flavio Melián</Link></h1>
        <p>Desarrollador multiplataforma enfocado en crear experiencias digitales limpias y funcionales.</p>
      </section>

      <section className="destacados">
        <h2>¿Qué hago?</h2>
        <ul>
          <li>✨ Desarrollo Frontend (React, CSS moderno)</li>
          <li>🧠 Diseño UX/UI centrado en el usuario</li>
          <li>🔗 Integración de APIs y herramientas</li>
          <li>🗃️ Creación y gestión de bases de datos</li>
          <li>🖥️ Creación y gestión de servidores</li>
          <li>📱 Desarrollo de aplicaciones móviles</li>
          <li>🔧 Mantenimiento y optimización de aplicaciones</li>
          <li>📈 Implementación de buenas prácticas de desarrollo</li>
          <li>📚 Formación y documentación técnica</li>
          <li>🤝 Trabajo en equipo y colaboración</li>
          <li>🚀 Innovación y mejora continua</li>
          <li>🌐 Desarrollo web accesible y responsivo</li>
          <li>💡 Solución de problemas y debugging</li>
          <li>📊 Análisis de datos y métricas</li>
          <li>🛠️ Herramientas de control de versiones (Git)</li>
          <li>📦 Gestión de dependencias y entornos de desarrollo</li>
          <li>🔒 Seguridad en aplicaciones web y móviles</li>
          <li>📱 Desarrollo de aplicaciones híbridas y nativas</li>
        </ul>
      </section>

      <section className="destacados">
        <img className='stack-home' src={gitGitHub} />
        <img className='stack-home-alt' src={stack} />
        <img className='stack-home-final' src={skills} />
      </section>
    </>

  )
}

export default Home

