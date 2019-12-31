import PageTitle from "./PageTitle";
import HelloText from "./text/HelloText";
import LinkBox from "./LinkBox";

const Hello = () => (
  <div className="hello-container">
    <PageTitle title="Hey, Hi" />
    <div className="under-the-title">
      <HelloText />

      <LinkBox link={"/about"} name="about me" />
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
      margin-bottom: 5rem;
    }
  `}</style>
);

export default Hello;
