import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import NotFoundPages from '../NotFoundPages/NotFoundPages';

function App() {
  const loggedIn = true;
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up">
          <Register />
        </Route>

        <Route path="/sign-in">
          <Login />
        </Route>

        <Route path="/movies">
          <Header
            loggedIn={loggedIn}
          />
          <Movies />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header
            loggedIn={loggedIn}
          />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header
            loggedIn={loggedIn}
          />
          <Profile />
        </Route>

        <Route path="/bad-request">
          <NotFoundPages />
        </Route>

        <Route path="/">
          <Header
            loggedIn={loggedIn}
          />
          <Main />
          <Footer />
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
