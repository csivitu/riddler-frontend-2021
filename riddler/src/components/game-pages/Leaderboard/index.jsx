import { useEffect, useState } from "react";
import { getLeaderboard } from "../../../api/api";
import './leader.css';

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
    <div className="whole_page">
    <table className="tables scrolldown">
        <tr>
            <th className="heading">Rank</th>
            <th className="heading">Player</th>
            <th className="heading">Score</th>
        </tr>
        <tr className="names">
        <td>1</td>
                  <td>Anoushka</td>
                  <td>20000</td>
        </tr>
        <tr className="names">
                  <td>2</td>
                  <td>Sanjay</td>
                  <td>20000</td>
        </tr>
        <tr className="names">
                  <td>3</td>
                  <td>Subhanu</td>
                  <td>20000</td>
        </tr>
        <tr className="names">
                  <td>4</td>
                  <td>Nimish</td>
                  <td>20000</td>
        </tr>
      {leaderboard.map((item,rank)=>{
          return (
              <tr className="names">
                  <td>{rank+1}</td>
                  <td>{item.username}</td>
                  <td>{item.score}</td>
              </tr>
          )
      })}
      </table>
      </div>
  )
};

export default Leaderboard;
