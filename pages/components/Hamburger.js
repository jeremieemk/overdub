import { useState } from "react";
import HamburgerOpenMenu from "./HamburgerOpenMenu";

function Hamburger() {
  const [isOpen, setOpen] = useState(false);
  const handleHamburgerClick = () => setOpen(!isOpen);
  return (
    <div className="hamburger-container">
      <div className="lines" onClick={handleHamburgerClick}>
        <div className="line upper-line"></div>
        <div className="line lower-line"></div>
      </div>

      {isOpen ? <HamburgerOpenMenu /> : null}
      {style}
      {isOpen ? openStyle : null}
    </div>
  );
}

const style = (
  <style jsx>{`
    .lines {
      margin-top: var(--global-margin);
      margin-right: var(--global-margin);
    }

    .line {
      margin-bottom: 0.5rem;
      width: 2rem;
      border-bottom: 0.2rem solid white;
      position: relative;
    }
  `}</style>
);
const openStyle = (
  <style jsx>{`
    .line {
      border-bottom: 0.2rem solid black;
      z-index: 100;
      margin-bottom: 0;
    }
    .lower-line {
      transform: rotate(-45deg) translateY(-0.3rem);
    }
    .upper-line {
      transform: rotate(45deg);
    }
  `}</style>
);

export default Hamburger;
