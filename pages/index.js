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
    }
    .landing-logo-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
    .arrow-container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: 10rem;
      transform: translateY(-4rem);
    }
    .logo-fades {
      visibility: hidden;
      opacity: 0;
      transition: visibility 3s, opacity 2s;
    }
    .hello-section-jumps-up {
      transform: translateY(-25rem);
      transition: transform 2s linear;
    }
    @media (min-width: 801px) {
      .landing-logo-wrapper {
        transform: scale(2);
      }
    }
  `}</style>
);

export default Index;
