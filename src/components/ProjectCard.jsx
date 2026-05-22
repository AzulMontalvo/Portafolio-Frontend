function ProjectCard({ project }) {
  return (
    <li className="project-card">
        <img src={project.image} alt={project.title} className="project-card-image" />
        <article className="project-card-content">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-description">{project.description}</p>
          <ul className="project-card-stack">
            {project.stack.map((tech, index) => (
              <li key={index} className="project-card-stack-item">{tech}</li>
            ))}
          </ul>
          <nav className="project-card-links">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-base">Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card-link">GitHub</a>
          </nav>
        </article>
    </li>
  );
}

export default ProjectCard;
