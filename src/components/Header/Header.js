import React, { useState } from 'react';
import logo from '../../images/logo.svg'
import user_icon from '../../images/profile.svg'
import { Link } from 'react-router-dom';

function Header(props) {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  function handleOpenClick() {
    setIsOpenMenu(false)
    setIsCloseMenu(true)
  }

  const [isCloseMenu, setIsCloseMenu] = useState(false);
  function handleCloseClick() {
    setIsCloseMenu(false)
    setIsOpenMenu(true)
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo"><img src={logo} alt="Логотип" className="logo" /></Link>

      <nav className={props.loggedIn ? "header__hide" : "header__nav header__nav_authorization"}>
        <Link to="/sign-up" className={props.loggedIn ? "header__hide"
          : "header__authorization-button"}>Регистрация</Link>
        <Link to="/sign-in" className={props.loggedIn ? "header__hide"
          : "header__authorization-button header__authorization-button_active"}>Войти</Link>
      </nav>

      <nav className={props.loggedIn ? "header__nav header__nav_films" : "header__hide"}>
        <Link to="/movies" className={props.loggedIn ? "header__films-link header__films-link_active"
          : "header__hide"}>Фильмы</Link>
        <Link to="/saved-movies" className={props.loggedIn ? "header__films-link"
          : "header__hide"}>Сохраненные фильмы</Link>
      </nav>

      <nav lassName={props.loggedIn ? "header__nav header__nav_user" : "header__hide"}>
        <Link to="/profile" className={props.loggedIn ? "header__user-link"
          : "header__hide"}>
          <p className="header__user-text">Аккаунт</p>
          <img src={user_icon} alt="Значок user" className="header__user-icon" /></Link>
      </nav>

      <button onClick={handleOpenClick} type="button"
        className={isOpenMenu && props.loggedIn ? "header__mobile-menu-open header__mobile-menu_active"
          : "header__mobile-menu-open"}></button>

      <button onClick={handleCloseClick} type="button"
        className={isCloseMenu ? "header__mobile-menu-close header__mobile-menu_active"
          : "header__mobile-menu-close"}></button>

      <nav className={isCloseMenu ? "header__nav_mobile_active" : "header__hide"}>
        <Link to="/" className={isCloseMenu ? "header__nav-link"
          : "header__hide"} onClick={handleCloseClick}>Главная</Link>
        <Link to="/movies" className={isCloseMenu ? "header__nav-link"
          : "header__hide"} onClick={handleCloseClick}>Фильмы</Link>
        <Link to="/saved-movies" className={isCloseMenu ? "header__nav-link"
          : "header__hide"} onClick={handleCloseClick}>Сохраненные фильмы</Link>
        <Link to="/profile" className={isCloseMenu ? "header__user-link header__user-link_mobile"
          : "header__hide"} onClick={handleCloseClick}>
          <p className="header__user-text">Аккаунт</p>
          <img src={user_icon} alt="Значок user" className="header__user-icon" />
        </Link>
      </nav>
    </header>
  )
}

export default Header;
