const Logo = () => (
  <div>
    <div className="logo">O</div>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .logo {
      font-family: "Sectra";
      font-size: 3rem;
      color: var(--color2);
      margin-left: var(--global-margin);
      margin-top: 1rem;
    }
  `}</style>
);

export default Logo;
