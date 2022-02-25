const Hero = () => {
  return (
    <div className="main">
      <div className="entry-banner text-center">
        <h1 id="hello">Hello, I'm</h1>
        <h1 id="name">XXXX</h1>
        <h1 id="person-description">
          UI Developer. UX Desinger. Problem Solver.
        </h1>
      </div>

      <div className="banner-buttons">
        <a className="btn btn-default btn-border" href="#about">
          Info
        </a>

        <a className="btn btn-default btn-border" href="#projects">
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default Hero;
