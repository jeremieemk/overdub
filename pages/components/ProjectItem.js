import LinkBox from "./LinkBox";
import ProjectDescriptionTitle from "./ProjectDescriptionTitle";

function ProjectItem(props) {
  return (
    <div className="project-item-container">
      <LinkBox name={props.name} />
      <ProjectDescriptionTitle title="COMPANY" />
      <p>{props.company}</p>
      <ProjectDescriptionTitle title="ROLE" />
      <p>{props.role}</p>
      <ProjectDescriptionTitle title="TOOLS" />
      <p>{props.tools}</p>
      <img className="screenshot" src={props.img} alt="screenshot" />
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .project-item-container {
      padding-right: var(--global-margin);
      padding-left: var(--global-margin);
      margin-top: var(--global-margin);
    }
    h1 {
      color: var(--color2);
      font-family: var(--font3);
      font-size: 1.3rem;
    }
    p {
      font-size: 1rem;
      color: white;
      font-family: var(--font4);
      margin-block-start: 0.5rem;
      margin-block-end: 0;
    }
    .screenshot {
      margin-top: var(--global-margin);
      width: 100%;
      height: auto;
    }
  `}</style>
);

export default ProjectItem;
