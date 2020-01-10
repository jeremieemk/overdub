import Layout from "./components/Layout";
import PageTitle from "./components/PageTitle";
import SkillBar from "./components/SkillBar";

const Skills = () => (
  <Layout>
    <PageTitle title="my technical Skills" />
    <div className="books-pic-container">
      <img className="books" src="/img/bookish.png" alt="me-carrying-books" />
    </div>

    <div className="skill-bar-group">
      <SkillBar skillName="REACT" percentage="90%" />
      <SkillBar skillName="JAVASCRIPT" percentage="90%" />
    </div>
    {style}
  </Layout>
);

const style = (
  <style jsx>{`
    .books {
      width: 15rem;
      height: auto;
    }
    .books-pic-container {
      display: flex;
      justify-content: center;
    }
    .skill-bar-group {
      padding-top: 2rem;
    }
  `}</style>
);

export default Skills;
