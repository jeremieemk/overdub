import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Hello from "../components/Hello";

function Index() {
  const [hasScrolled, sethasScrolled] = useState(false);
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 150) {
      sethasScrolled(true);
    } else {
      sethasScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Layout>
        <div
          className={
            hasScrolled
              ? "landing-page-container logo-fades"
              : "landing-page-container"
          }
        >
          <div className="landing-logo-container">
            <div className="landing-logo-wrapper">
              <img className="avatar" src="/img/avatar1.png" alt="avatar" />
              <h1 className="over">over-</h1>
              <h1 className="dub">duB</h1>
              <hr></hr>
              <h2 className="web">WEB DEV.</h2>
            </div>
          </div>
          <div className="arrow-container">
            <img className="arrow" src="/img/arrow.png" alt="arrow" />
          </div>
        </div>
        <div className={hasScrolled ? "hello-section-jumps-up" : null}>
          <Hello />
        </div>
      </Layout>

      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .landing-page-container {
      visibility: visible;
      opacity: 1;
      transition: visibility 3s, opacity 2s linear;
      position: relative;
      z-index: -1;
    }
    .landing-logo-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: -1;
    }
    .avatar {
      width: 5.5rem;
      height: auto;
      margin-left: -0.5rem;
      position: relative;
      z-index: -1;
    }

    .over {
      color: var(--color2);
      font-family: var(--font2);
      font-size: 3.5rem;

      margin-top: -1rem;
      position: relative;
      z-index: -1;
    }
    .dub {
      color: var(--color2);
      font-family: var(--font2);
      font-size: 6rem;
      margin-top: -1.6rem;
      position: relative;
      z-index: -1;
    }
    h1,
    h2 {
      margin-block-start: 0;
      margin-block-end: 0;
      position: relative;
      z-index: -1;
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
      position: relative;
      z-index: -1;
    }
    .web {
      font-family: var(--font3);
      color: white;
      font-size: 1.15rem;
      margin-left: 5.2rem;
      margin-top: 0.1rem;
      position: relative;
      z-index: -1;
    }
    .arrow-container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: 10rem;
      transform: translateY(-4rem);
      position: relative;
      z-index: -1;
    }
    .logo-fades {
      visibility: hidden;
      opacity: 0;
      transition: visibility 3s, opacity 2s;
      position: relative;
      z-index: -1;
    }
    .hello-section-jumps-up {
      transform: translateY(-15rem);
      transition: transform 1.5s linear;
      position: relative;
      z-index: -1;
    }
    @media (min-width: 801px) {
      .landing-logo-wrapper {
        transform: scale(1.4) translateZ(-1em);
      }
    }
  `}</style>
);

export default Index;
