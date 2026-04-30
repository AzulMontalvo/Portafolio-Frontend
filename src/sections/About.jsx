import { DownloadIcon } from "../assets/icons/Icons";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-glow"></div>
      <h2 className="section-title">Sobre mí</h2>
      <section>
        <h3 className="about-quote">
          Soluciones integrales, desde la lógica del servidor hasta la
          interacción del usuario.
        </h3>
        <section className="stats-container">
          <div className="stat-item">
            <span>+2</span> años de exp.
          </div>
          <div className="stat-item">
            <span>10+</span> Proyectos
          </div>
          <div className="stat-item">
            <span>100%</span> Escalable
          </div>
        </section>
      </section>
      <article className="about-right">
        <p>
          Soy <strong>Ingeniera en Sistemas</strong> con una especialización marcada en el
          desarrollo de <strong>aplicaciones integrales</strong>. Mi formación me permite abordar
          cada proyecto desde una estructura lógica y técnica sólida,
          garantizando que tanto la experiencia del usuario como la arquitectura
          del servidor estén respaldadas por un código <strong>eficiente</strong> y <strong>escalable</strong>.
        </p>
        <p>
          Mi objetivo es construir puentes entre las necesidades del negocio y
          soluciones tecnológicas completas, transformando requerimientos
          complejos en ecosistemas digitales fluidos. Me apasiona el reto de
          optimizar procesos de extremo a extremo y cuidar el equilibrio entre
          un <strong>backend robusto</strong> y un <strong>frontend impecable</strong> para crear productos que
          realmente aporten valor.
        </p>
      </article>
      <a href="public/CV.pdf" download id="btnDescargarCV" className="btn-base btn-dark btn-cv">Descargar CV <DownloadIcon /></a>
    </section>
  );
}

export default About;
