import PageTitle from "./PageTitle";
import HelloText from "./text/HelloText";
import LinkBox from "./LinkBox";

const Hello = () => (
  <div className="hello-container">
    <PageTitle title="Hey, Hi" />
    <div className="under-the-title">
      <HelloText />
      <LinkBox link={"/about"} name="about me" showArrow="true" />
      <LinkBox link={"/portfolio"} name="portfolio" showArrow="true" />
      <LinkBox name="skills" showArrow="true" />
      <LinkBox name="cv" showArrow="true" />
    </div>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .hello-container {
      height: 100vh;
      margin-bottom: 5rem;
    }

    .under-the-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5rem;
    }
  `}</style>
);

export default Hello;