import filmImg from '../../images/pic__COLOR_pic-2.jpg'

function MoviesCard(props) {
  return (
    <article className="movies-card">
      <div className="movies-card_info-film">
        <h2 className="movies-card__name">В погоне за Бенкси</h2>
        <p className="movies-card__duration">27 минут</p>
      </div>
      <img src={filmImg} className="movies-card__img" alt='Кадр фильма "В погоне за Бенкси"' />
      <button type='button' className={props.moviesSave ? "movies-card__button movies-card__button_active" : "movies-card__button"}>
        <p className={props.moviesSave ? "movies-card__hide" : "movies-card__button-text"}>Сохранить</p>
        <div className={props.moviesSave ? "movies-card__button-text movies-card__button-icon" : "movies-card__hide"}></div>
        </button>
    </article>
  )
}

export default MoviesCard;