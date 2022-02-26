const Footer = () => {
  return (
    <div className="footer">
      <div className="media-links">
        <div className="facebook">
          <a href="#">
            <img
              className="img-responsive"
              src="./images/facebook.svg"
              alt="facebook logo"
            />
          </a>
        </div>

        <div className="linkedin">
          <a href="#">
            <img
              className="img-responsive"
              src="./images/linkedin.svg"
              alt="linkedin logo"
            />
          </a>
        </div>

        <div className="pinterest">
          <a href="#">
            <img
              className="img-responsive"
              src="./images/pinterest.svg"
              alt="pinterest logo"
            />
          </a>
        </div>

        <div className="email-icon">
          <a href="#">
            <img
              className="img-responsive"
              src="./images/email.svg"
              alt="email logo"
            />
          </a>
        </div>
      </div>

      <div className="personal-contact">
        <div className="phone">
          <h4>Phone: XXXXXX</h4>
        </div>

        <div className="email-personal-contact">
          <h4>Email: XXXXX@gmail.com</h4>
        </div>
      </div>

      <div className="company-information">
        <h3>XXXX</h3>
        <h4>Copyright &copy; 2021</h4>
        <h4>NY</h4>
      </div>

      <div className="home-footer">
        <h4>
          <a href="#">Home</a>
        </h4>
      </div>

      <div className="portfolio-footer">
        <h4>
          <a href="#">Portfolio</a>
        </h4>
        <ul>
          <li>
            <a href="#">Project1</a>
          </li>
          <li>
            <a href="#">Project2</a>
          </li>
          <li>
            <a href="#">Project3</a>
          </li>
          <li>
            <a href="#">See All</a>
          </li>
        </ul>
      </div>

      <div className="resume-footer">
        <h4>
          <a href="#">Resume</a>
        </h4>
        <ul>
          <li>
            <a href="#">Download</a>
          </li>
        </ul>
      </div>

      <div className="contact-footer">
        <h4>
          <a href="#">Contact</a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
