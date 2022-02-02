import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login() {
  return (
    <section className="login">
      <Link to="/"><img src={logo} alt="Логотип" className="logo" /></Link>
      <h3 className="login__title">Рады видеть!</h3>
      <form className="login__form">
        <label className="login__label" for="login-email">E-mail</label>
        <input className="login__input" type="email" id="login-email"></input>

        <label className="login__label" for="login-password">Пароль</label>
        <input className="login__input" type="password" id="login-password"></input>

        <button type="submit" className="login__button">Войти</button>
      </form>
      <div className="login__entry">
          <p className="login__text">Еще не зарегистрированы?</p>
          <Link className="login__link" to="/sign-up">Регистрация</Link>
        </div>
    </section>
  )
}

export default Login;