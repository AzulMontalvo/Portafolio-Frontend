function Navbar() {

  return (
    <header className="navbar">
        <div className="nav-container">
            <h1 className="nav-title">Portafolio</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                    <li><a href="#contact">Contáctame</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar