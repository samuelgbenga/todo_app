import Head from "./component/head/Head";
import Middle from "./component/middle/Middle";
import List from "./component/list/List";

import "./style.css";

function App() {
  return (
    <div className="container">
      <div className="app">
        <Head />
        <Middle />
        <div className="listContainer">
          <List />
          <List />
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
