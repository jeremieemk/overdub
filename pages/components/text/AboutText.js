const AboutText = () => (
  <div className="about-text">
    <p className="upper-text">
      I built my first web project 12 years ago. I had been working in FM radio
      stations as an engineer for a few years and I wanted to take advantage of
      streaming technology to build a truly international and multilingual radio
      station on the internet. Groovalizacion radio was born in 2008 in the
      midst of my ’nomadic years’ (I lived in 7 countries in 10 years). I built
      the first version on Joomla and I have helped designing the following
      versions since although I didn’t develop them myself. During those years I
      was busy having a career as a DJ and producer. I always had in the back of
      my mind that studying computer science would be a fantastic tool to renew
      my approach to music making and to open myself to new intellectual
      horizons.
    </p>
    {style}
  </div>
);

const style = (
  <style jsx>{`
  .about-text {
    color: white;
    font-family: var(--font2);
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: left;
  }
  .upper-text {
    font-size: 0.8rem;
  }
  .yellow {
    color: var(--color2);
    font-size: 2rem;
    font-family: var(--font3);
  }
    }
  `}</style>
);

export default AboutText;
