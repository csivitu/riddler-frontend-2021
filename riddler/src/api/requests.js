import API from "./api";

export const getLeaderboard = async () => {
  let res = await API.get(`/score`);
  return res.data;
};

export const insertUser = async (usertoken) => {
  const requestOptions = {
    method: 'POST',
    headers: {'x-access-token':usertoken}
  }
  let res = await fetch('http://localhost:3001/insert/user', requestOptions);
  return res;
}

export const getMap = async (usertoken, username) => {
  const requestOptions = {
    method: 'POST',
    headers: {'x-access-token':usertoken}
  }

  let res = await fetch('http://localhost:3001/map', requestOptions);
  res = await res.json();
  return res;
};
