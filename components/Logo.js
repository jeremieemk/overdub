import Link from "next/link";

const Logo = () => (
  <div>
    <div className="logo" style={{ fontFamily: "Sectra" }}>
      <Link href="/">
        <a className="logo-letter">O</a>
      </Link>
    </div>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .logo-letter {
      color: var(--color2);
    }
    .logo {
      z-index: 100;
      font-size: 3rem;
      color: var(--color2);
      margin-left: var(--global-margin);
      margin-top: 1rem;
      position: relative;
    }
    @media (min-width: 801px) {
      .logo {
        font-size: 4rem;
        margin-top: 2rem;
      }
    }
  `}</style>
);

export default Logo;
