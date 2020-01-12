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

      {isOpen ? (
        <HamburgerOpenMenu handleHamburgerClick={handleHamburgerClick} />
      ) : null}
      {style}
      {isOpen ? openStyle : null}
    </div>
  );
}

const style = (
  <style jsx>{`
    .lines {
      padding-top: var(--global-margin);
      margin-right: var(--global-margin);
      width: 100%;
      height: 40%;
    }

    .line {
      margin-bottom: 0.5rem;
      width: 2rem;
      border-bottom: 0.2rem solid white;
      position: relative;
      transition: transform 0.3s;
    }
  `}</style>
);
const openStyle = (
  <style jsx>{`
    body {
      overflow: hidden;
    }
    .line {
      border-bottom: 0.2rem solid black;
      z-index: 100;
      margin-bottom: 0;
      transition: transform 0.3s;
    }
    .lower-line {
      transform: rotate(-45deg) translateY(-0.15rem);
      transform-origin: center;
    }
    .upper-line {
      transform: rotate(45deg) translateY(0.15rem);
      transform-origin: center;
    }
  `}</style>
);

export default Hamburger;
