const Hamburger = () => (
  <div class="hamburger-container">
    <div class="line"></div>
    <div class="line"></div>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .hamburger-container {
      margin-top: var(--global-margin);
      margin-right: var(--global-margin);
    }
    .line {
      margin-bottom: 0.5rem;
      width: 2rem;
      border-bottom: 0.2rem solid white;
    }
  `}</style>
);

export default Hamburger;
