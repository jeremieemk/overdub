const HelloText = () => (
  <div className="hello-text">
    <p className="upper-text">
      I’m Jérémie. I am a <span className="yellow">coder</span> and a music
      producer based in Lisbon, Portugal.
    </p>
    {/* <p className="lower-text">
      I hold the 2001 world record for number of music gigabytes downloaded on
      Napster
    </p> */}
    {style}
  </div>
);

const style = (
  <style jsx>{`
  .hello-text {
    color: white;
    font-family: var(--font2);
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: center;
  }
  .upper-text {
    font-size: 1.6rem;
  }
  .yellow {
    color: var(--color2);
    font-size: 2rem;
    font-family: var(--font3);
  }
    }
  `}</style>
);

export default HelloText;
