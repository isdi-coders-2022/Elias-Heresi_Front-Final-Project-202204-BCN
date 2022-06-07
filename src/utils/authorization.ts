import { Token } from "../redux/interfaces/UserInterface";

export const passToken = () => {
  const key: Token = localStorage.getItem("token");
  const token = `Bearer ${key}`;
  const authorization = { headers: { Authorization: token } };
  return authorization;
};
