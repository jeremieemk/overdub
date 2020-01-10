import Link from "next/link";

function HamburgerOpenMenu(props) {
  const test = () => console.log("ça marche");
  return (
    <div className="hamburger-menu-container">
      <div className="nested-menu-container">
        <Link href="/about">
          <a onClick={props.handleHamburgerClick}>ABOUT ME</a>
        </Link>
        <Link href="/portfolio">
          <a onClick={props.handleHamburgerClick}>PORTFOLIO</a>
        </Link>

        <Link href="/skills">
          <a onClick={props.handleHamburgerClick}>SKILLS</a>
        </Link>

        <Link href="/cv">
          <a onClick={props.handleHamburgerClick}>CV</a>
        </Link>
        <div className="get-in-touch">
          <p>GET IN TOUCH</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/jeremieemk" target="_blank">
              <img className="social-icon-pic" src="/img/fb.png" alt="fb" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeremiemoussaidkerouanton/"
              target="_blank"
            >
              <img
                className="social-icon-pic"
                src="/img/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a href="mailto:jeremieemk@gmail.com" target="_blank">
              <img className="social-icon-pic" src="/img/mail.png" alt="mail" />
            </a>
          </div>
        </div>
      </div>

      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .hamburger-menu-container {
      height: 100vh;
      width: 100vw;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
    }
    .nested-menu-container {
      background: -webkit-linear-gradient(165deg, white 65%, #f6f6f6 65%);
      background: -o-linear-gradient(165deg, white 65%, #f6f6f6 65%);
      background: -moz-linear-gradient(165deg, white 65%, #f6f6f6 65%);
      background: linear-gradient(165deg, white 65%, #f6f6f6 65%);
      height: 100%;
      width: 100%;
      padding: 2rem;
      font-size: 1.05rem;
      font-family: var(--font3);
      letter-spacing: 0.1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
    }
    .nested-menu-container > a {
      padding: 1rem;
    }
    .social-icon-pic {
      width: 1.5rem;
      padding: 1rem;
      height: auto;
    }
    .get-in-touch {
      text-align: center;
      transform: translateY(8rem);
    }
    .get-in-touch > p {
      color: black;

      font-size: 0.8rem;
    }
  `}</style>
);

export default HamburgerOpenMenu;
