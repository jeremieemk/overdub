function PageTitle(props) {
  return (
    <div className="page-title-container">
      <div className="page-title">{props.title}</div>
      <div class="title-line"></div>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .page-title-container {
      padding-top: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page-title {
      color: var(--color2);
      font-family: var(--font3);
      text-align: center;
      font-size: 2rem;
    }
    .title-line {
      margin-bottom: 0.5rem;
      width: 2rem;
      border-bottom: 0.2rem solid white;
      margin-left: 4.5rem;
    }
  `}</style>
);

export default PageTitle;