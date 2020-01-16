import Header from "./Header";
import GlobalStyles from "../style/GlobalStyles";

const Layout = props => (
  <div>
    <div className="container">
      <Header />
      {props.children}
    </div>
    {GlobalStyles}
    {style}
  </div>
);

const style = (
  <style jsx>{`
    .container {
      position: relative;
      width: 100%;
    }
  `}</style>
);

export default Layout;
