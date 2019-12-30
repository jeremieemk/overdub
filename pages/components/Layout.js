import Header from "./Header";
import GlobalStyles from "../style/GlobalStyles";

const Layout = props => (
  <div>
    <div className="container">
      <Header />
      {props.children}
    </div>
    {GlobalStyles}
  </div>
);

export default Layout;
