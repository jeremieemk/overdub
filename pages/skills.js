import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import SkillBar from "../components/SkillBar";

const Skills = () => (
  <Layout>
    <PageTitle title="my technical Skills" />
    <div className="books-pic-container">
      <img className="books" src="/img/bookish.png" alt="me-carrying-books" />
    </div>

    <div className="skill-bar-group">
      <SkillBar skillName="JavaScript" percentage="90%" />
      <SkillBar skillName="React" percentage="85%" />
      <SkillBar skillName="CSS" percentage="90%" />
      <SkillBar skillName="HTML" percentage="90%" />
      <SkillBar skillName="jQuery" percentage="70%" />
      <SkillBar skillName="Python" percentage="50%" />
      <SkillBar skillName="C" percentage="30%" />
      <SkillBar skillName="SQL" percentage="40%" />
      <SkillBar skillName="Figma" percentage="50%" />
      <SkillBar skillName="Heroku" percentage="50%" />
      <SkillBar skillName="Git" percentage="65%" />
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
      padding-bottom: 5rem;
    }
  `}</style>
);

export default Skills;
