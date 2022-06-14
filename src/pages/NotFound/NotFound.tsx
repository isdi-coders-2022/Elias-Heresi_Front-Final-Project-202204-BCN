import { ToastContainer } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";
import { Ui } from "../../redux/interfaces/UiInterface";
import { useAppSelector } from "../../redux/store/hooks";

import { NotFoundContainer } from "./NotFoundContainer";

const NotFound = (): JSX.Element => {
  const { loading }: Ui = useAppSelector((state) => state.ui);
  return (
    <>
      <NavBar />
      <ToastContainer />
      {loading && <Loading />}
      <NotFoundContainer>
        <h1>Page not found</h1>
        <p>
          The page you requested doesn't exist or is currently under
          construction
        </p>
        <img
          src="https://media.istockphoto.com/photos/happy-construction-worker-cleaning-his-gloves-from-sawdust-at-in-picture-id1161937292?k=20&m=1161937292&s=170667a&w=0&h=DoJZl49Vp1CVnSR9u_5vhA7nRB7TcMDQb6kbR-Owgno="
          alt="PAge under construction"
        />
        <p>Use the navigation bar to explore other pages</p>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
