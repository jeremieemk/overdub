import Header from "./Header";

const Layout = props => (
  <div>
    <div className="container">
      <Header />
      {props.children}
    </div>
    <style jsx>
      {`
        @font-face {
          font-family: "Sectra";
          src: url("/public/fonts/Sectra.ttf") format("truetrype");
          font-style: normal;
        }
        .container {
          background-color: #f85e3c;
          height: 100vh;
        }

        * {
          font-family: "Sectra";
        }
      `}
    </style>
  </div>
);

export default Layout;
