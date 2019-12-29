import PageTitle from "./PageTitle";

const Hello = () => (
  <div className="hello-container">
    <PageTitle title="Hey, Hi" />
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
