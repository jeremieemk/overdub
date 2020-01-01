import Layout from "./components/Layout";
import PageTitle from "./components/PageTitle";
import ProjectItem from "./components/ProjectItem";
import ProjectDetails from "./components/text/ProjectDetails";

const Portfolio = () => (
  <Layout>
    <PageTitle title="my Portfolio" />
    <ProjectItem {...ProjectDetails.escuta} />
    {style}
  </Layout>
);

const style = (
  <style jsx>{`
   
    }
  `}</style>
);

export default Portfolio;
