import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {

  return (
    <section id="projects" className="projects">
        <h2 className="section-title">Proyectos</h2>
        <ul className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
    </section>
  )
}

export default Projects
