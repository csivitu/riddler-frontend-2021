// import react,{ useState,useHistory,useDispatch,useEffect} from "react";
import "./App.css";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Leaderboard from "./components/game-pages/leaderboard";
import Map from "./components/game-pages/map";
import Login from "./components/login/Login";
import Layout from "./components/registration-navbar/Layout";
import Pages from "./components/registration-pages/Pages";
import Timer from "./components/registration-pages/timer/Timers";
import Token from "./components/token/Token";
// import api, { setAuthToken } from "./api/api.js";
// import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [notAllowed, setNotAllowed] = useState(false);
  // const [verified, setVerified] = useState(true);
  // const [isCSI, setIsCSI] = useState(false);
  // const history = useHistory(); //to redirect

  // const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   dispatch(updateLogin(false));
  //   dispatch(setUsername(""));
  //   dispatch(setRegNo(""));
  //   dispatch(setRound2(false));
  //   history.push("/");
  // };

  // const onLogin = async () => {
  //   const token = localStorage.getItem("token");
  //   setAuthToken(token);
  //   const response = await api.get(
  //     `${process.env.REACT_APP_ACCOUNTS_URL}/user`
  //   );
  //   const { user, success } = response.data;

  //   dispatch(setUsername(user.username));

  //   if (!success) {
  //     logout();
  //     return;
  //   }

  //   if (!user.verificationStatus) {
  //     setVerified(false);
  //     return;
  //   }
  //       if (user.regNo.startsWith("20") || user.scope.indexOf("csi") > -1) {
  //         setLoggedIn(true);
  //         dispatch(updateLogin(true));
  //         dispatch(setRegNo(user.regNo));

  //         if (user.scope.indexOf("csi") > -1) {
  //           setIsCSI(true);
  //         }

  //         if (user.scope.indexOf("r2") > -1) {
  //           dispatch(setRound2(true));
  //           return;
  //         }

  //         dispatch(setRound2(false));
  //         return;
  //       }

  //       setNotAllowed(true);
  // };
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     onLogin();
  //   }
  // }, []);
  return (
    <>
      {/* <Route path="/oauth/token">
        <Token onLogin={onLogin} />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route> */}
      <div className="App">
      <Router>
            <Route exact path="/"><Layout /><Pages /></Route>
            
            
            <Route exact path ="/countdown">
                <Timer/>
            </Route>
            <Route exact path="/register">
                <Login/>
            </Route>
            <Route exact path="/oauth/redirect">
                <Token/>
            </Route>
            {/* <Route exact path="/play" component={}/> */}
            <Route exact path="/leaderboard">
                <Leaderboard/>
            </Route>
            <Route exact path="/map">
                <Map/>
            </Route>
        </Router>
      </div>
    </>
  );
}
export default App;
