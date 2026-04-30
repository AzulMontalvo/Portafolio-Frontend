import logo from '../assets/icons/logo.svg';

function Navbar() {
  return (
    <header className="navbar">
        <div className="nav-container">
            <img src={logo} alt="Logo" className="nav-logo" />
            {/* <h1 className="nav-title"><a href="#home">Azul Montalvo</a></h1> */}
            <nav>
                <ul className="nav-links">
                    <li className="nav-item">
                        <a href="#about" className="nav-link nav-text">Sobre mí</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link nav-text">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link nav-text">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" className="nav-link nav-text">Experiencia</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar