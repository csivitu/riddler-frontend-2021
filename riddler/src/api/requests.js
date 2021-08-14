import API from "./api";

export const getLeaderboard = async () => {
  let res = await API.get(`/score`);
  return res.data;
};

export const getMap = async (username) => {
  let res = await API.post("/map", { username: username });
  console.log(res);
  return res.data;
};
