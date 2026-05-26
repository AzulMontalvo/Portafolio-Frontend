function Experience() {
  return (
    <section className="experience">
      <h2 className="section-title">Experiencia</h2>
      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <span className="timeline-date">2025 - Presente</span>
            <h3>FrontEnd Developer</h3>
            <h4>Empresa</h4>
            <p>
              Descripción
            </p>
            <ul className="project-card-stack">
              <li className="project-card-stack-item">RazorPages</li>
              <li className="project-card-stack-item">ASP.NET</li>
              <li className="project-card-stack-item">VB.NET</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
