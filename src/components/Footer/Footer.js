function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">Учебный проект Яндекс.Практикум &amp; BeatFilm.</p>
      <hr className="page__line page__line_dark"/>
      <div className="footer__wrapper">
        <p className="footer__copyright">&copy; 2022</p>
        <nav className="footer__nav">
          <a className="footer__button" href='https://practicum.yandex.ru' target="_blank"
          rel="noopener noreferrer">Яндекс.Практикум</a>
          <a className="footer__button" href='https://github.com/klichkovskiy/movies-explorer-frontend'
          target="_blank" rel="noopener noreferrer">Github</a>
          <a className="footer__button" href='https://www.linkedin.com/in/klichkouski/' target="_blank"
          rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;