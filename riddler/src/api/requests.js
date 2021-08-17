import API from "./api";

export const getLeaderboard = async () => {
  let res = await API.get(`/score/all`);
  return res.data;
};

export const getPlayerdata = async (usertoken) => {
  const requestOptions = {
    method: "GET",
    headers: { "x-access-token": usertoken },
  };
  let res = await fetch("http://localhost:3001/playerdata", requestOptions);
  res = await res.json();
  return res;
};

export const insertUser = async (usertoken) => {
  const requestOptions = {
    method: "POST",
    headers: { "x-access-token": usertoken },
  };
  let res = await fetch("http://localhost:3001/insert/user", requestOptions);
  localStorage.setItem('userCreated',true);
  return res;
};

export const getMap = async (usertoken) => {
  const requestOptions = {
    method: "POST",
    headers: { "x-access-token": usertoken },
  };

  let res = await fetch("http://localhost:3001/map", requestOptions);
  res = await res.json();
  return res;
};

export const getQuestion = async (usertoken, qid) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "x-access-token": usertoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quesId: qid }),
  };

  let res = await fetch("http://localhost:3001/ques", requestOptions);
  res = await res.json();
  return res;
};

export const submitAnswer = async (usertoken, qId, answer) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "x-access-token": usertoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quesId: qId, answer: answer }),
  };

  let res = await fetch("http://localhost:3001/submit", requestOptions);
  res = await res.json();
  return res;
}

export const getHint = async (usertoken, qId) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "x-access-token": usertoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quesId: qId}),
  };

  let res = await fetch("http://localhost:3001/hint", requestOptions);
  res = await res.json();
  return res;
}

export const penaltyPoint = async (usertoken, qId) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "x-access-token": usertoken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quesId: qId}),
  };

  let res = await fetch("http://localhost:3001/penalty", requestOptions);
  res = await res.json();
  return res;
}