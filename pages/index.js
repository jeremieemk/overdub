import Header from "./components/Header.js";
import Layout from "./components/MyLayout";
import Head from "next/head";
import GlobalStyles from "./style/GlobalStyles";

const Index = () => (
  <div>
    <Head>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>
    </Head>
    <Layout>
      <div>Hello</div>
    </Layout>
    {GlobalStyles}
  </div>
);

export default Index;
