import { Component } from "../core/com"
import movieStore from '../store/movie'
import MovieItem from "./MovieItem"

export default class Movie extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => {
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */ `
      <div class="movies"></div>
    `
    const moviesEl = this.el.querySelector('.movies')
    moviesEl.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
        movie
      }).el)
    )
  }
}