import Layout from "./components/MyLayout";
import Head from "next/head";
import GlobalStyles from "./style/GlobalStyles";

const Index = () => (
  <div>
    <Head>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>
    </Head>
    <Layout>
      <img className="avatar" src="/img/avatar1.png" alt="avatar" />
      <h1 className="over">over-</h1>
      <h1 className="dub">duB</h1>
      <hr></hr>
      <h2 className="web">WEB DEV.</h2>
    </Layout>
    {GlobalStyles}
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .avatar {
      width: 5rem;
      height: auto;
    }

    .over {
      color: var(--color2);
      font-family: var(--font2);
      font-size: 3.5rem;
      margin-left: 0.7rem;
    }
    .dub {
      color: var(--color2);
      font-family: var(--font2);
      font-size: 6rem;
      margin-top: -1.4rem;
    }
    h1,
    h2 {
      margin-block-start: 0;
      margin-block-end: 0;
    }
    hr {
      margin-block-start: 0;
      margin-block-end: 0;
      border-color: white;
      width: 5rem;
      border-top: 1px solid white;
      margin-inline-start: 5rem;
      margin-top: -1rem;
      margin-inline-end: 0;
    }
    .web {
      font-family: var(--font3);
      color: white;
    }
  `}</style>
);

export default Index;
