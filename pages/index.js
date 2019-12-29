import { useEffect } from "react";
import Layout from "./components/MyLayout";
import Head from "next/head";
import GlobalStyles from "./style/GlobalStyles";

function Index() {
  const handleScroll = () => console.log("scrolled");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Head>
        <style>{`
              body {
                margin: 0;
              }
            `}</style>
      </Head>
      <Layout>
        <div className="landing-logo-container">
          <div>
            <img className="avatar" src="/img/avatar1.png" alt="avatar" />
            <h1 className="over">over-</h1>
            <h1 className="dub">duB</h1>
            <hr></hr>
            <h2 className="web">WEB DEV.</h2>
          </div>
        </div>
      </Layout>
      {GlobalStyles}
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .landing-logo-container {
      height: 101vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: -5rem;
    }
    .avatar {
      width: 5.5rem;
      height: auto;
      margin-left: -0.5rem;
    }

    .over {
      color: var(--color2);
      font-family: var(--font2);
      font-size: 3.5rem;

      margin-top: -1rem;
    }
    .dub {
      color: var(--color2);
      font-family: var(--font2);
      font-size: 6rem;
      margin-top: -1.6rem;
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
      width: 5.5rem;
      border-top: 1px solid white;
      margin-inline-start: 5rem;
      margin-top: -1.3rem;
      margin-inline-end: 0;
    }
    .web {
      font-family: var(--font3);
      color: white;
      font-size: 1.15rem;
      margin-left: 5.2rem;
      margin-top: 0.1rem;
    }
  `}</style>
);

export default Index;
