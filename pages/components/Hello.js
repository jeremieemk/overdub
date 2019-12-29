import PageTitle from "./PageTitle";
import HelloText from "./text/HelloText";

const Hello = () => (
  <div className="hello-container">
    <PageTitle title="Hey, Hi" />
    <HelloText />
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .hello-container {
      height: 100vh;
    }
  `}</style>
);

export default Hello;
