import {
  Hero,
  AboutMe,
  Summary,
  ProjectsAndPortfolio,
  ContactInfo,
  Footer,
} from '../components';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Summary />
      <ProjectsAndPortfolio />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Home;
