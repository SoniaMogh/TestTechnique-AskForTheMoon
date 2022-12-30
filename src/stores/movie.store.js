import {makeAutoObservable} from "mobx";
//import React from "react";

const API_KEY = "api_key=63a4ad85ea62e262d861e00df57ade2f";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
//const API_SEARCH = BASE_URL+ "/search/movie?" + API_KEY + "&query";


class MovieStore {
  constructor() {
    makeAutoObservable(this);
  }

  // write some code here to query the API
  // FetchMovie() allow to query the API
  FetchMovie() {
      return fetch(API_URL)
          .then((response) => response.json())
          .then((data) => {
              return data.results;
          })

  };

}

export default MovieStore;

