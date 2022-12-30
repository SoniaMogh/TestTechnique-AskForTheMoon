import { inject, observer } from "mobx-react";
// inject makes available to a component (via props ) specific data structures defined by a Provider
import React from "react";
//import {css} from "@emotion/css";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const MovieList = ({ movieStore }) => {
    // build your UI here
    movieStore.FetchMovie()
        .then(response => {
            response.forEach(movie => {
                const {title, poster_path, vote_average, overview} = movie;
                const Movies = document.createElement('div');
                Movies.classList.add('movie');
                Movies.innerHTML = `
                    <img src="${API_IMG + poster_path}" alt="${title}">
                    <div class = "movie-info">
                      <h3>${title}</h3>
                      <span class="green">${vote_average}</span>
                    </div>
                    <div class="overview">
                        <h3>Overview</h3>
                        ${overview}
                    </div>
                `;
                test.appendChild(Movies);
            })
        });

    return <div id="test" className="MoviePlace"></div>

};


export default inject("movieStore")(observer(MovieList));
