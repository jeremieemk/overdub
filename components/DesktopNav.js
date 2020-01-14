import Link from "next/link";

const menuItems = [
  { name: "HELLO", link: "/" },
  { name: "ABOUT ME", link: "/about" },
  { name: "PORTFOLIO", link: "/portfolio" },
  { name: "SKILLS", link: "/skills" }
];

const renderMenuItems = () =>
  menuItems.map(item => (
    <div className="title-plus-line-container">
      <Link href={item.link}>
        <a className="menu-item-name">{item.name}</a>
      </Link>
      <div className="bottom-line"></div>
    </div>
  ));

const DesktopNav = () => (
  <div className="desktop-nav-container">
    {renderMenuItems()}
    <div className="title-plus-line-container">
      <a
        className="menu-item-name"
        href="https://res.cloudinary.com/dbslwolfi/image/upload/v1578760331/rss/CV2020_gsc1gi.pdf"
        target="_blank"
      >
        CV
      </a>
      <div className="bottom-line"></div>
    </div>

    {style}
  </div>
);

const style = (
  <style jsx>{`
    .desktop-nav-container {
      z-index: 1;
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

    .bottom-line {
      padding-top: 0.5rem;
      width: 1.2rem;
      border-bottom: 0.2rem solid white;
      margin-left: 0.5rem;
      display: none;
      position: absolute;
    }
    .menu-item-name:hover + .bottom-line {
      display: block;
    }

    @media (max-width: 801px) {
      .desktop-nav-container {
        display: none;
      }
    }
  `}</style>
);

export default DesktopNav;
