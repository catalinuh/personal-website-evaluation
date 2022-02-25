import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
      </div>

      <div className="primary-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
