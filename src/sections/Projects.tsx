import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects