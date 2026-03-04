import { HomeIcon, AboutIcon, SkillsIcon, ProjectsIcon, ExperienceIcon, ContactIcon } from "../assets/icons/Icons"

function Navbar() {
    const title = "<am/>"
    const navLinks = [
        // { name: "Home", href: "#home", icon: <HomeIcon /> },
        { name: "Sobre mí", href: "#about", icon: <AboutIcon /> },
        { name: "Skills", href: "#skills", icon: <SkillsIcon /> },
        { name: "Proyectos", href: "#projects", icon: <ProjectsIcon /> },
        { name: "Experiencia", href: "#experience", icon: <ExperienceIcon /> },
        { name: "Contáctame", href: "#contact", icon: <ContactIcon /> },
    ]

  return (
    <header className="navbar">
        <div className="nav-container">
            <h1 className="nav-title"><a href="#home">Azul Montalvo</a></h1>
            <nav>
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name} className="nav-item">
                            <a href={link.href} className="nav-link">
                                <span className="nav-icon">{link.icon}</span>
                                <span className="nav-text">{link.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar