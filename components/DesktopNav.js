import Link from "next/link";

const DesktopNav = () => (
  <div className="desktop-nav-container">
    <Link href="/index">
      <a>HELLO</a>
    </Link>
    <Link href="/about">
      <a>ABOUT ME</a>
    </Link>
    <Link href="/portfolio">
      <a>PORTFOLIO</a>
    </Link>

    <Link href="/skills">
      <a>SKILLS</a>
    </Link>

    <a
      href="https://res.cloudinary.com/dbslwolfi/image/upload/v1578760331/rss/CV2020_gsc1gi.pdf"
      target="_blank"
    >
      CV
    </a>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .desktop-nav-container {
      width: 100%;
      position: absolute;
      padding-top: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: var(--font4);
      font-size: 1.2rem;
      background-color: var(--color1);
    }
    .desktop-nav-container > * {
      padding: 2rem;
    }
    @media (max-width: 801px) {
      .desktop-nav-container {
        display: none;
      }
    }
  `}</style>
);

export default DesktopNav;
