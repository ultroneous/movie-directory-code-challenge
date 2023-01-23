import React from "react";

function Movieslist() {
  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        {/* This li has to be dynamic as per the array */}
        <li
          className="flex slide-up-fade-in justify-content-between"
          style={{ borderBottom: "2px solid var(--primary-color)" }}
        >
          <div className="layout-column w-40">
            <h3 className="my-3">Movie name</h3>
            <p className="my-0">Ratings: Movie Rating</p>
          </div>
          <div className="layout-row my-auto mr-20">
            <p className="justify-content-end">Movie Duration Hrs</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Movieslist;
