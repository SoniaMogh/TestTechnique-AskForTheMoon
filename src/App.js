import React from "react";
import { css } from '@emotion/css'

import MoviePage from "./components/pages/MoviePage";

const App = () => {
  return (
    <div className={css`
      min-height: 100vh;
      background-color: #F2F2F2;
    `}>
      <header className={css`
        position: relative;
        height: 150px;
        line-height: 150px;
        background-color: #555555;
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
      `}>
        Bienvenue dans Ask for movies
      </header>
      <div id="Nav" className="overlay">

        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

        <div class="overlay-content" id="overlay-content"></div>

      </div>
      <li className="translate" data-role="tooltip">
        <div>fr</div>
      </li>
      <main>
        <MoviePage />
      </main>
    </div>
  );
};

export default App;
