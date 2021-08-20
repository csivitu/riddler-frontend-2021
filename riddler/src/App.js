import React, { useEffect } from 'react';
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Layout from './components/registration-navbar/Layout';
import Pages from './components/registration-pages/Pages';
import Timer from './components/registration-pages/timer/Timers';
import Token from './components/token/Token';
import api, { setAuthToken } from './api/api';
import { logout, setUsername } from './redux/reducers/authReducer';
import PrivateRoute from './components/privateRoutes';
import Game from "./components/game-pages/Game";
import Leaderboard from "./components/game-pages/Leaderboard";
import Play from './components/game-pages/PlayPage';
import Guide from './components/game-pages/Guide';

const {process} = require('./env.json');



function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token)
  const onLogin = async (tkn) => {
    if (tkn !== '') {
      setAuthToken(tkn);
      const response = await api.get(
        `${process.env.REACT_APP_ACCOUNTS_URL}/user`
      );
      const { user, success } = response.data;

      if (!success) {
        dispatch(logout());
        return;
      }
      dispatch(setUsername({ username: user.username }));

    }
  };

  useEffect(() => {
    if (token !== '') {
      onLogin(token);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/"><Layout /><Pages /></Route>
        <Route exact path="/countdown" component={Timer} />
        <Route exact path="/register" component={Login} />
        <Route exact path="/oauth/redirect">
          <Token onLogin={onLogin} />
        </Route>
        <PrivateRoute exact path="/game" component={Game} />
        <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
        <PrivateRoute exact path="/guide" component={Guide} />
        <PrivateRoute exact path="/play" component={Play} />
      </Switch>
    </Router>
  );
}

export default App;
