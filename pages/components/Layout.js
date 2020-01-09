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
    }
  `}</style>
);

export default Layout;
