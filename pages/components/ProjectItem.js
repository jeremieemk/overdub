import LinkBox from "./LinkBox";
import ProjectDescriptionTitle from "./ProjectDescriptionTitle";

function ProjectItem(props) {
  return (
    <div className="project-item-container">
      <a href={props.link} target="_blank">
        <LinkBox name={props.name} />
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

      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .project-item-container {
      padding-right: var(--global-margin);
      padding-left: var(--global-margin);
      margin-top: 1.5rem;
    }
    p {
      font-size: 1rem;
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
  `}</style>
);

export default ProjectItem;
