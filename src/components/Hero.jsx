import heroImage from "../assets/images/retrato-ilustracion.png";

function Hero() {
  return (
    <section className="hero">
      <section className="hero-content">
        <h1 className="section-title">
          ¡Hola! <br></br> Soy Azul Montalvo
        </h1>
        <p>
          Desarrolladora Full Stack especializada en crear aplicaciones web
          completas, combinando interfaces de usuario fluidas con arquitecturas
          de backend robustas y escalables.
        </p>
        <a id="btnProyectos" className="btn-base" href='#projects'>
          Ver proyectos
        </a>
        <a id="btnContactar" className="btn-base btn-light" href='#contact'>
          Contactar
        </a>
      </section>
      <img src={heroImage} alt="Hero Image" className="hero-image" />
    </section>
  );
}

export default Hero;
