const ProjectsAndPortfolio = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-header">
        <h1>Projects and Portfolio</h1>
      </div>

      <div className="projects-header-quote">
        <h3>Sharing my endeavors and passions...</h3>
      </div>

      <div className="projects-list">
        <div className="luvtalk-project">
          <h3>LUV TALK Website</h3>
          <p>
            Website, created during my first internship, which utilized HTML,
            CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.
          </p>
          <div className="project-more-info">
            <a className="btn btn-default btn-border more" href="#">
              More
            </a>
          </div>
        </div>

        <div className="personal-website-project">
          <h3>Personal Website</h3>
          <p>
            Enjoyable side project that was created to experiment with more HTML
            and CSS, but also provided an outlet to showcase my abilities and
            interests.
          </p>
          <div className="project-more-info">
            <a className="btn btn-default btn-border more" href="#">
              More
            </a>
          </div>
        </div>

        <div className="strike-zone-project">
          <h3>Strike Zone Analysis</h3>
          <p>
            Data analytics project completed during my time at the Illinois Math
            and Science Academy which studied the baseball strike zone based on
            the state of the game.
          </p>
          <div className="project-more-info">
            <a className="btn btn-default btn-border more" href="#">
              More
            </a>
          </div>
        </div>
      </div>

      <div className="see-more-button">
        <a className="btn btn-default btn-border" href="#">
          More Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectsAndPortfolio;
