import foto from '../../images/foto.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title" id='student'>Студент</h2>
      <hr className="page__line page__line_light" />
      <div className="about-me__block">
        <p className="about-me__name">Евгений</p>
        <p className="about-me__subtitle">Фронтенд-разработчик, 29 лет</p>
        <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <div className="about-me__links">
          <a className="about-me__link" href='https://www.linkedin.com/in/klichkouski/' target="_blank"
            rel="noopener noreferrer">LinkedIn</a>
          <a className="about-me__link" href='https://github.com/klichkovskiy/movies-explorer-frontend'
            target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img src={foto} alt="Фотография автора" className="about-me__foto" />
      </div>
    </section>
  )
}

export default AboutMe;