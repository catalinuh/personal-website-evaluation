import {
  Hero,
  AboutMe,
  Summary,
  ProjectsAndPortfolios,
  ContactInfo,
  Footer,
} from '../components';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Summary />
      <ProjectsAndPortfolios />
      <ContactInfo />
    </div>
  );
};

export default Home;
