import { inject, observer } from "mobx-react";
// inject makes available to a component (via props ) specific data structures defined by a Provider
import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const API_KEY = "api_key=63a4ad85ea62e262d861e00df57ade2f";
const BASE_URL = "https://api.themoviedb.org/3";
//const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY + "&language=fr";

const MovieList = ({ movieStore }) => {
    // build your UI here
    movieStore.FetchMovieDiscover()
        .then(response => {
            console.log(response.results)
            response.results.forEach(movie => {
                const {title, poster_path, vote_average, overview, id} = movie;
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
                        <button type="button" class="More" id="${id}">More</button>
                    </div>
                `;
                test.append(Movies);

                document.getElementById(id).addEventListener('click', () => {
                    console.log(id)
                    document.getElementById("Nav").style.width = "100%"
                })
            })
        });

    return <div id="test" className="MoviePlace"></div>

};
function openNav({data}){
    let id = data.id;
    document.getElementById("Nav").style.width = "100%"
    fetch(BASE_URL + "/movie/" + id + "/reviews?" + API_KEY + "&language=fr-FR")
        .then(res => res.json()).then(Review => {
        const {content} = Review;

        const Reviews = document.createElement('div');
        Reviews.classList.add('review');
        Reviews.innerHTML = `
                      <h3>${content}</h3>
                `;
        test.appendChild(Reviews);
    })
    return <div id="test"></div>
};

function CloseNav(){
    document.getElementById("Nav").style.width = "0%"
}

export default inject("movieStore")(observer(MovieList));
