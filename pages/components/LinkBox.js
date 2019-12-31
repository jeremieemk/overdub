import Link from "next/link";

function LinkBox(props) {
  return (
    <div>
      <Link href={props.link}>
        <a>
          <div className="text-box-container">
            <div className="text-box">
              <a className="text">{props.name}</a>
            </div>
            <div className="arrow-box">
              <img className="arrow" src="/img/whitearrow3.png" alt="arrow" />
            </div>
          </div>
        </a>
      </Link>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .text-box-container {
      margin-top: 1rem;
      display: flex;
      cursor: "pointer";
    }
    .text-box {
      color: white;
      font-family: var(--font3);
      border: var(--line-width) solid white;
      font-size: 1.3rem;
      width: 11rem;
      height: 3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .arrow-box {
      border-width: var(--line-width) var(--line-width) var(--line-width) 0;
      width: 5rem;
      border-style: solid;
      border-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      padding-left: 2rem;
    }
    .arrow {
      width: 2rem;
      height: auto;
    }
  `}</style>
);

export default LinkBox;
