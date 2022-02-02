import { HashLink } from 'react-router-hash-link';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-&nbsp;разработки.</h1>
      <nav className="promo__nav">
      <HashLink  className="promo__button"  to="#project">О проекте</HashLink>
      <HashLink  className="promo__button"  to="#techs">Технологии</HashLink>
      <HashLink  className="promo__button"  to="#student">Студент</HashLink>
      </nav>
    </section>
  )
}

export default Promo;