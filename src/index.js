import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/content";
const App = () => {
  return (
    <Fragment>
      <Header />
      <h3>Content list</h3>
      <ul>
        <li>
          <Content />
        </li>
        <li>
          <Content />
        </li>
        <li>
          <Content />
        </li>
      </ul>
      <Footer />
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
