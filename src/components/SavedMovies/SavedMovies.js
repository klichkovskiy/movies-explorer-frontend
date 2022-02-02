import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return(
    <section className="saved-movies">
      <SearchForm />
      <hr className="page__line page__line_dark"/>
      <MoviesCardList />
    </section>
  )
}

export default SavedMovies;