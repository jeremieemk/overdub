const HelloText = () => (
  <div className="hello-text">
    <p className="upper-text">
      I’m Jérémie. I am a <span className="yellow">coder</span> , a music
      producer <span className="smaller">and an akward dancer.</span>
      <span className="smaller2">
        {" "}
        I was born in France and I live in Lisbon, Portugal.
      </span>
      <div className="img-container">
        <img className="sardine" src="/img/toilet.png" alt="sardine" />
      </div>
    </p>
    {style}
  </div>
);

const style = (
  <style jsx>{`
  .hello-text {
    width: 16rem;
    color: white;
    font-family: var(--font2);
    margin-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: left;
    
  }
      .sardine {
        margin-top: 2rem;
      width: 12rem;
      height: auto;
    }
  .img-container {
    display : flex;
    justify-content: center;
  }
  .upper-text {
    font-size: 1.6rem;
  }
  .smaller {
    font-size: 1.1rem;
  }
  .smaller2{
    font-size: 1.4rem;
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
