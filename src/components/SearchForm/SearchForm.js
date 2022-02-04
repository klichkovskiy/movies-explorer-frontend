import bottonSearch from '../../images/botton_search.svg'
import iconSearch from '../../images/icon_search.svg'
import iconPoint from '../../images/point.svg'

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__shape">
        <fieldset className="search-form__fieldset">
          <div className="search-form__searh-block">
            <label className="search-form_label" for="search-form-film">
              <img src={iconSearch} className="search-form__icon-search" alt='лупа' />
            </label>
            <input type="text" placeholder="Фильм" className="search-form__field" id="search-form-film" required></input>
            <button type="submit" className="search-form__button">
              <img src={bottonSearch} className="search-form__button-img" alt='стрелка вправо' />
            </button>
          </div>
          <hr className="search-form__line" />
          <div className="search-form__check-block">
            <input type="checkbox" className="search-form__checkbox" id="search-form-checkbox"></input>
            <span class="search-form__pseudo-checkbox">
              <img src={iconPoint} className="search-form__icon-point" alt='точка' />
            </span>
            <label className="search-form__text" for="search-form-checkbox">Короткометражки</label>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;