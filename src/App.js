import React, { useState } from "react";

import { Movieform, Movieslist, Search } from "./components";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  return (
    <>
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform />
        </div>
        <div className="layout-column w-30">
          <Search />
          <Movieslist />
          <div data-testid="noResult">
            <h3 className="text-center">No Results Found</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
