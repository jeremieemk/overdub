import PageTitle from "./PageTitle";
import HelloText from "./text/HelloText";
import LinkBox from "./LinkBox";

const Hello = () => (
  <div className="hello-container">
    <PageTitle title="Hey, Hi" />
    <div className="under-the-title">
      <HelloText />
      <LinkBox name="about me" />
      <LinkBox name="portfolio" />
      <LinkBox name="skills" />
      <LinkBox name="cv" />
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
    }
  `}</style>
);

export default Hello;
