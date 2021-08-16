import { useEffect, useState } from "react";
import { getLeaderboard } from "../../../api/requests";
import Layout from "../../game-navbar/Layout";
import "./leader.css";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  
  useEffect(() => {
    const asyncLeaderboard = async () => {
      let res = await getLeaderboard();
      setLeaderboard(res);
    };
    asyncLeaderboard();
  }, []);

  return (
    <>
      <Layout />
      <div className="whole_page">
        <table className="tables scrolldown">
          <tr>
            <th className="heading">Rank</th>
            <th className="heading">Player</th>
            <th className="heading">Score</th>
          </tr>
          {leaderboard.map((item, rank) => {
            return (
              <tr className="names">
                <td>{rank + 1}</td>
                <td>{item.username}</td>
                <td>{item.score}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
