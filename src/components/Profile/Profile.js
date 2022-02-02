function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Евгений!</h2>
      <article className="profile__user">
        <div className="profile__line">
          <p className="profile__data">Имя</p>
          <p className="profile__value">Евгений</p>
        </div>
        <hr className="page__line page__line_dark" />
        <div className="profile__line">
          <p className="profile__data">E-mail</p>
          <p className="profile__value">pochta@yandex.ru</p>
        </div>
      </article>
      <div className="profile__buttons">
        <button type="button" className="profile__button">Редактировать</button>
        <button type="submit" className="profile__button profile__button_exit">Выйти из аккаунта</button>
      </div>
    </section>
  )
}

export default Profile;