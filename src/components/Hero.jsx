import heroImage from '../assets/images/retrato-ilustracion.png';

function Hero() {
  return (
    <section className="hero">
      <section className="hero-content">
      <h1>Hola, soy Azul</h1>
      <p>
        Desarrolladora Frontend enfocada en crear experiencias digitales
        fluidas, intuitivas y de alto rendimiento. Transformo ideas complejas en
        interfaces limpias y funcionales.
      </p>
      <button id="btnProyectos" className="hero-button">Ver proyectos</button>
      <button id="btnContactar" className="hero-button">Contactar</button>
      </section>
      <img
        src={heroImage}
        alt="Hero Image"
        className="hero-image"
      />
    </section>
  );
}

export default Hero;
