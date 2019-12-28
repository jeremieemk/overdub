const Logo = () => (
  <div>
    <div className="logo">O</div>
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .logo {
      font-size: 3rem;
      color: #fff55a;
      margin-left: var(--global-margin);
      margin-top: 1rem;
    }
  `}</style>
);

export default Logo;
