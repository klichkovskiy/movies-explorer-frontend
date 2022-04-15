function Techs() {
  return (
    <section className="techs">
      <article className="techs__block">
        <h2 className="techs__title" id='techs'>Технологии</h2>
        <hr className="page__line page__line_light" />
        <p className="techs__subtitle">7 технологий</p>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </article>
    </section>
  )
}

export default Techs;