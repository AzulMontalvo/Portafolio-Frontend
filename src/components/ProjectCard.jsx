import { projects } from "../data/projects";

function ProjectCard() {
  return (
    <div className="project-card">
        {projects.map((project) => (
            <div key={project.id} className="card">
                <img src={project.image} alt={project.title} className="card-image" />
                <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                    <div className="card-stack">
                        {project.stack.map((tech, index) => (
                            <span key={index} className="stack-item">{tech}</span>
                        ))}
                    </div>
                    <div className="card-links">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="card-link">Demo</a> 
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">GitHub</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ProjectCard