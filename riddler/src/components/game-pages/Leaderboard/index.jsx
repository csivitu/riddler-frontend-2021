import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLeaderboard, getPlayerdata } from "../../../api/requests";
import Layout from "../../game-navbar/Layout";
import "./leader.css";

const Leaderboard = () => {
  const token = useSelector((state) => state.auth.token);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const username = useSelector((state) => state.auth.username);
  useEffect(() => {
    const asyncLeaderboard = async () => {
      let res = await getLeaderboard();
      setLeaderboard(res);
      setLoadingPage(false);
    };
    asyncLeaderboard();
  }, []);

  return (
    <>
      <Layout backgroundColor="var(--leaderboard-bg)" />
      {loadingPage && (
        <div>
          <div id="map-loading">
            <CircularProgress color="secondary" />
          </div>
          <div id="darken" />
        </div>
      )}
      <div className="whole_page">
        <table className="tables">
          <thead class="fixedHeader">
            <tr className="heading">
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody className="scrolldown">
            {/* {leaderboard.map((item, rank) => {
              return (
                <>
                  {username === item.username ? (
                    <tr id="me" className="names">
                      <td>{rank + 1}</td>
                      <td>{item.username}</td>
                      <td>{item.score}</td>
                    </tr>
                  ) : (
                    <tr className="names">
                      <td>{rank + 1}</td>
                      <td>{item.username}</td>
                      <td>{item.score}</td>
                    </tr>
                  )}
                </>
              );
            })} */}
            <tr class="names">
              <td>1</td>
              <td>horcrux</td>
              <td>1820</td>
            </tr>
            <tr class="names">
              <td>2</td>
              <td>milloii</td>
              <td>1580</td>
            </tr>
            <tr class="names">
              <td>3</td>
              <td>pridevta</td>
              <td>1500</td>
            </tr>
            <tr class="names">
              <td>4</td>
              <td>Gligy</td>
              <td>1460</td>
            </tr>
            <tr class="names">
              <td>5</td>
              <td>CoolGirl2019</td>
              <td>990</td>
            </tr>
            <tr class="names">
              <td>6</td>
              <td>itsayush</td>
              <td>990</td>
            </tr>
            <tr class="names">
              <td>7</td>
              <td>Thaman</td>
              <td>990</td>
            </tr>
            <tr class="names">
              <td>8</td>
              <td>alok27a</td>
              <td>990</td>
            </tr>
            <tr class="names">
              <td>9</td>
              <td>bhavye_27</td>
              <td>990</td>
            </tr>
            <tr class="names">
              <td>10</td>
              <td>nanduri_jv</td>
              <td>990</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
