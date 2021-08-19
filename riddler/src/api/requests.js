import { API, baseURL} from "./api";

export const getLeaderboard = async () => {
  let res = await API.get(`/score/all`);
  return res.data;
};

export const getPlayerdata = async (usertoken) => {
  const requestOptions = {
    method: "GET",
    headers: { "x-access-token": usertoken },
  };
  let res = await fetch(`${baseURL}/playerdata`, requestOptions);
  res = await res.json();
  return res;
};

export const insertUser = async (usertoken) => {
  const requestOptions = {
    method: "POST",
    headers: { "x-access-token": usertoken },
  };
  let res = await fetch(`${baseURL}/insert/user`, requestOptions);
  localStorage.setItem('userCreated',true);
  return res;
};

export const getMap = async (usertoken) => {
  const requestOptions = {
    method: "POST",
    headers: { "x-access-token": usertoken },
  };

  let res = await fetch(`${baseURL}/map`, requestOptions);
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

  let res = await fetch(`${baseURL}/ques`, requestOptions);
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

  let res = await fetch(`${baseURL}/submit`, requestOptions);
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

  let res = await fetch(`${baseURL}/hint`, requestOptions);
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

  let res = await fetch(`${baseURL}/penalty`, requestOptions);
  res = await res.json();
  return res;
}