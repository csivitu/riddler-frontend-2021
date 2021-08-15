import { useState } from "react";
import Map from "../Map";
import Question from "../Question";

const Play = () => {
  const [mapOpen, setMapOpen] = useState(true);
  const [qId, setQId] = useState('');
  // const [questionOpen, setQuestionOpen] = useState(false);

  return (
    <>{mapOpen ? <Map mapOpen={setMapOpen} qId={setQId}/> : <Question mapOpen={setMapOpen} qId={qId} />}</>
  );
};

export default Play;
