import Layout from "./components/Layout";
import PageTitle from "./components/PageTitle";
import LinkBox from "./components/LinkBox";

const Portfolio = () => (
  <Layout>
    <PageTitle title="my Portfolio" />
    <LinkBox name="escuta" />

    {style}
  </Layout>
);

const style = (
  <style jsx>{`
   
    }
  `}</style>
);

export default Portfolio;
