import Layout from "./components/Layout";
import PageTitle from "./components/PageTitle";
import ProjectItem from "./components/ProjectItem";
import ProjectDetails from "./components/text/ProjectDetails";

const Portfolio = () => (
  <Layout>
    <PageTitle title="my Portfolio" />
    <ProjectItem {...ProjectDetails.escuta} />
    <ProjectItem {...ProjectDetails.raum404} />
    <ProjectItem {...ProjectDetails.izem} />
    {style}
  </Layout>
);

const style = (
  <style jsx>{`
   
    }
  `}</style>
);

export default Portfolio;
