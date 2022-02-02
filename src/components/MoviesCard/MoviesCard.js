import filmImg from '../../images/pic__COLOR_pic-2.jpg'

function MoviesCard() {
  return (
    <article className="movies-card">
      <div className="movies-card_info-film">
        <h2 className="movies-card__name">В погоне за Бенкси</h2>
        <p className="movies-card__duration">27 минут</p>
      </div>
      <img src={filmImg} className="movies-card__img" alt='Кадр фильма "В погоне за Бенкси"' />
      <button type='button' className="movies-card__button">Сохранить</button>
    </article>
  )
}

export default MoviesCard;