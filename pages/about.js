import Layout from "./components/Layout";
import PageTitle from "./components/PageTitle";

const About = () => (
  <Layout>
    <PageTitle title="about Me" />
    <div className="under-the-title">
      <img
        className="dancing-avatar"
        src="/img/shower.png"
        alt="dancing-avatar"
      />
    </div>
    {style}
  </Layout>
);

const style = (
  <style jsx>{`
    .under-the-title {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .dancing-avatar {
      width: 10rem;
      height: auto;
    }
  `}</style>
);

export default About;
