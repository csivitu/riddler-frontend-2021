import { useEffect, useState } from "react";
import { getLeaderboard } from "../../../api/requests";
import Layout from "../../game-navbar/Layout";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    const asyncLeaderboard = async () => {
      let res = await getLeaderboard();
      setLeaderboard(res);
    };
    asyncLeaderboard();
  }, [leaderboard]);

  return(
    <>
        <Layout/>
    
    <table>
        <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
        </tr>
      {leaderboard.map((item,rank)=>{
          return (
              <tr>
                  <th>{rank+1}</th>
                  <th>{item.username}</th>
                  <th>{item.score}</th>
              </tr>
          )
      })}
      </table>
      </>
  )
};

export default Leaderboard;
