const Logo = () => (
  <div>
    <div className="logo" style={{ fontFamily: "Sectra" }}>
      O
    </div>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .logo {
      font-size: 3rem;
      color: var(--color2);
      margin-left: var(--global-margin);
      margin-top: 1rem;
    }
  `}</style>
);

export default Logo;
