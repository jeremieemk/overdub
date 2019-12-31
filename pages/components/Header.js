import Link from "next/link";
import Logo from "./logo.js";
import Hamburger from "./Hamburger.js";

const Header = () => (
  <div className="header-container">
    <Link href="/">
      <Logo />
    </Link>
    <Hamburger />
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .header-container {
      height: 5rem;
      display: flex;
      justify-content: space-between;
      position: fixed;
      top: 0;
      width: 100%;
      // background-color: var(--color1);
    }
  `}</style>
);

export default Header;
