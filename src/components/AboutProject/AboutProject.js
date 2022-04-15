function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title" id='project'>О проекте</h2>
      <hr className="page__line page__line_light"/>
      <article className="about-project__paragraph">
        <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </article>
      <div className="about-project__diagram">
        <p className="about-project__weeks about-project__weeks_green">1 неделя</p>
        <p className="about-project__weeks">4 недели</p>
        <p className="about-project__part">Back-end</p>
        <p className="about-project__part">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;