import {makeAutoObservable} from "mobx";

const API_KEY = "api_key=63a4ad85ea62e262d861e00df57ade2f";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL_DISCOVER = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY + "&language=fr";


class MovieStore {
  constructor() {
    makeAutoObservable(this);
  }

  // write some code here to query the API
  // FetchMovie() allow to query the API
  FetchMovieDiscover() {
      return fetch(API_URL_DISCOVER)
          .then((response) => {return response.json()})
  };

}

export default MovieStore;

