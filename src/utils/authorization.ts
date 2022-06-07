import { Token } from "../redux/interfaces/UserInterface";

export const passToken = () => {
  const key: Token = localStorage.getItem("token");
  const token = `Bearer ${key}`;
  return { headers: { Authorization: token } };
};
