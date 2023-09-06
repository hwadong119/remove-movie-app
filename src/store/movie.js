import { Store } from '../core/com'
import config from "../../config/apikey"

const API_KEY = config.apiKey

const store = new Store({
  searchText: '',
  page: 1,
  movies: []
})

export default store
export const searchMovies = async page => {
  const res = await fetch(`https://omdbapi.com?apikey=${API_KEY}&s=${store.state.searchText}&page=${page}`)
  const json = await res.json()
  console.log(json)
}