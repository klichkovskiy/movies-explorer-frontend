import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register() {
  return (
    <section className="register">
      <Link to="/"><img src={logo} alt="Логотип" className="logo" /></Link>
      <h3 className="register__title">Добро пожаловать!</h3>
      <form className="register__form">
        <label className="register__label" for="register-name">Имя</label>
        <input className="register__input" type="text" id="register-name"></input>
        <span className="register__error" id="register-name-error"></span>

        <label className="register__label" for="register-email">E-mail</label>
        <input className="register__input" type="email" id="register-email"></input>
        <span className="register__error" id="register-email-error"></span>

        <label className="register__label" for="register-password">Пароль</label>
        <input className="register__input" type="password" id="register-password"></input>
        <span className="register__error" id="register-password-error"></span>

        <button type="submit" className="register__button">Зарегистрироваться</button>
      </form>
      <div className="register__entry">
        <p className="register__text">Уже зарегистрированы?</p>
        <Link className="register__link" to="/sign-in">Войти</Link>
      </div>
    </section>
  )
}

export default Register;