import axios from "axios";

interface IRegister {
  name: string;
  surname: string;
  email: string;
  username: string;
  password: string;
}

export const registerUserThunk = (formData: IRegister) => async () => {
  let route: string = `${process.env.REACT_APP_API_URL}user/register`;
  await axios.post(route, formData);
};
