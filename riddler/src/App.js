import react,{ useState,useHistory,useDispatch,useEffect} from "react";
import "./App.css";
import Regs from "./websites/registrations/Regs";
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
        <Regs />
      </div>
    </>
  );
}
export default App;
