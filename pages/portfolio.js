import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ProjectItem from "../components/ProjectItem";
import ProjectDetails from "../components/text/ProjectDetails";

const Portfolio = () => (
  <Layout>
    <div className="portfolio-container">
      <PageTitle title="my Portfolio" />
      <div className="projects-section">
        <ProjectItem {...ProjectDetails.escuta} />
        <ProjectItem {...ProjectDetails.raum404} />
        <ProjectItem {...ProjectDetails.izem} />
      </div>

      {style}
    </div>
  </Layout>
);

const style = (
  <style jsx>{`
  @media (min-width: 801px) {
      .projects-section {
        margin-top: 5rem;
      }
      .portfolio-container {
        padding-left: var(--desktop-padding);
        padding-right: var(--desktop-padding);
      }
    }
   
    }
  `}</style>
);

export default Portfolio;
