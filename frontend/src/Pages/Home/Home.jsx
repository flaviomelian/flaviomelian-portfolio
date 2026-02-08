import { Link } from "react-router-dom";
import stack from "../../assets/stack.png";
import skills from "../../assets/skills.png";
import gitGitHub from "../../assets/git-github.png";
import "./Home.css";

function Home() {
  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center home-section"
      >
        <div className="text-white text-center bg-black/50 p-8 rounded-xl backdrop-blur-sm max-w-lg mx-4 to-see">
          <Link
            to="/dashboard"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition projects"
          >
            Ver proyectos
          </Link>
        </div>
      </section>
      <section className="intro">
        <h1>
          ¡Hola! Soy
          <Link to="/sobre-mi" className="about-link">
            Flavio Melián
          </Link>
        </h1>
        <p>
          Desarrollador multiplataforma enfocado en crear experiencias digitales
          limpias y funcionales.
        </p>
      </section>

      <section className="destacados">
        <img className="stack-home" src={gitGitHub} />
        <img className="stack-home-alt" src={stack} />
        <img className="stack-home-final" src={skills} />
      </section>
    </>
  );
}

export default Home;
