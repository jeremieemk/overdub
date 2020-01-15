import LinkBox from "./LinkBox";
import ProjectDescriptionTitle from "./ProjectDescriptionTitle";

function ProjectItem(props) {
  return (
    <div className="project-item-container">
      <ProjectDescriptionTitle title="WEBSITE" />
      <a href={props.link} target="_blank" className="link-and-arrow-container">
        <p>{props.name}</p>
        <div className="link-arrow-container">
          <img className="link-arrow" src="/img/whitearrow3.png" alt="arrow" />
        </div>
      </a>

      <ProjectDescriptionTitle title="COMPANY" />
      <p>{props.company}</p>
      <ProjectDescriptionTitle title="ROLE" />
      <p>{props.role}</p>
      <ProjectDescriptionTitle title="TOOLS" />
      <p>{props.tools}</p>
      <a href={props.link} target="_blank">
        <img className="screenshot" src={props.img} alt="screenshot" />
      </a>
      <div className="arrow-container">
        <img className="arrow" src="/img/arrow.png" alt="arrow" />
      </div>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .project-item-container {
      padding-right: var(--global-margin);
      padding-left: var(--global-margin);
      margin-top: 2rem;
    }
    .link-and-arrow-container{
      display: flex;

    }
    .item-title-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .link-arrow {
      width: 1rem;
      transform: translateY(0.35rem);
      padding-left: 0.4rem;
    }
    p {
      font-size: 1.1rem;
      color: white;
      font-family: var(--font4);
      margin-block-start: 0.2rem;
      margin-block-end: 0;
    }
    .screenshot {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      width: 100%;
      height: auto;

    }
.separation-line {
      margin-bottom: 0.5rem;
      width: 100%;
      float: right;
      border-bottom: 0.2rem solid white;
    }
.arrow-container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-top:4rem;
      margin-bottom: -5rem;
      transform: translateY(-4rem);
    }
    .arrow {
      width: 2rem;
      opacity: 0.8;

    }
    }
  `}</style>
);

export default ProjectItem;
