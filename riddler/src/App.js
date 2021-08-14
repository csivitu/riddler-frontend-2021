// import react,{ useState,useHistory,useDispatch,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Leaderboard from "./components/game-pages/Leaderboard";
import Map from "./components/game-pages/Map";
import Login from "./components/login/Login";
import Layout from "./components/registration-navbar/Layout";
import Pages from "./components/registration-pages/Pages";
import Timer from "./components/registration-pages/timer/Timers";
import Token from "./components/token/Token";
import Game from "./components/game-pages/Game";
import Rules from "./components/game-pages/Rules";
// import Play from "./components/game-pages/Play";
import Question from "./components/game-pages/Question/Question";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Layout />
          <Pages />
        </Route>
        <Route exact path="/countdown" component={Timer} />
        <Route exact path="/register" component={Login} />
        <Route exact path="/oauth/redirect" component={Token} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/play" component={Question} />
      </Router>
    </>
  );
}
export default App;
