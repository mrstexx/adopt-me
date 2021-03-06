import React, { useState, lazy, Suspense } from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
// import ThemeContext from "./context/ThemeContext";
import NavBar from "./navbar/Navbar";
import store from "./store";
// import Details from "./details/Details";
// import SearchParams from "./search/SearchParams";

// render details only when really needed
const Details = lazy(() => import("./details/Details"));
const SearchParams = lazy(() => import("./search/SearchParams"));

const App = () => {
  // const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      {/* <ThemeContext.Provider value={themeHook}> */}
      <Provider store={store}>
        <div>
          <NavBar />
          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </Provider>
      {/* </ThemeContext.Provider> */}
    </React.StrictMode>
  );
};

export default App;
