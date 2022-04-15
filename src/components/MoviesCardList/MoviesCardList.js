import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const moviesSave = true;

  return (
    <section className="movies-card-list">
      <MoviesCard 
      moviesSave={moviesSave}
      />
      <MoviesCard 
      moviesSave={moviesSave}
      />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </section>
  )
}

export default MoviesCardList;