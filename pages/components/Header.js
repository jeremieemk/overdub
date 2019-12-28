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
      display: flex;
      justify-content: space-between;
    }
  `}</style>
);

export default Header;
