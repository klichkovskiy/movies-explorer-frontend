function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <p className="portfolio__text">Статичный сайт</p>
          <a className="portfolio__link link__hover" href='https://github.com/klichkovskiy/russian-travel'
            target="_blank" rel="noopener noreferrer">&#x2197;</a>
        </li>
        <hr className="page__line page__line_dark" />

        <li className="portfolio__item">
          <p className="portfolio__text">Адаптивный сайт</p>
          <a className="portfolio__link link__hover" href='https://github.com/klichkovskiy/mesto'
            target="_blank" rel="noopener noreferrer">&#8599;</a>
        </li>
        <hr className="page__line page__line_dark" />

        <li className="portfolio__item">
          <p className="portfolio__text">Одностраничное приложение</p>
          <a className="portfolio__link link__hover" href='https://github.com/klichkovskiy/react-mesto-auth'
            target="_blank" rel="noopener noreferrer">&#8599;</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;