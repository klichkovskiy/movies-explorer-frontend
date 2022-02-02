import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return(
    <section className="movies">
      <SearchForm />
      <hr className="page__line page__line_dark"/>
      <MoviesCardList />
    </section>
  )
}

export default Movies;