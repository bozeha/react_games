import React, { useEffect } from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";

import { Route } from "react-router-dom";

function App() {
  ///dispatch can get object or function

  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
