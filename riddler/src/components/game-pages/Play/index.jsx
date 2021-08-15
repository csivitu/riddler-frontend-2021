import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMap, insertUser } from "../../../api/requests";
import Map from "../Map";
import Question from "../Question";

const Play = () => {
  const [mapOpen, setMapOpen] = useState(true);
  const [qId, setQId] = useState("");
  const [mapRes, setMapRes] = useState({});
  // const [questionOpen, setQuestionOpen] = useState(false);
  console.log("mapRes from play");
  console.log(mapRes);

  // if(mapRes.lockedNode) setMapOpen(false);

  return (
    <>
      {mapOpen ? (
        <Map mapOpen={setMapOpen} qId={setQId} setMapRes={setMapRes} />
      ) : (
        <Question mapOpen={setMapOpen} qId={qId} mapData={mapRes}/>
      )}
    </>
  );
};

export default Play;
