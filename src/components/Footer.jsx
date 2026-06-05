function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a
          href="https://github.com/AzulMontalvo"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/azul-montalvo"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          LinkedIn
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Azul Montalvo. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
