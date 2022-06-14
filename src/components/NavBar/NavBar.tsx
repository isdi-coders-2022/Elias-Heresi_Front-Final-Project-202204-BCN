import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCollectionActionCreator } from "../../redux/features/diarySlice";
import { PaginationState } from "../../redux/interfaces/PageInterfaces";
import { useAppDispatch } from "../../redux/store/hooks";
import { RootState } from "../../redux/store/store";
import { loadEntriesThunk } from "../../redux/thunks/diaryThunks/diaryThunks";
import { logOutUserThunk } from "../../redux/thunks/userThunks/userThunks";
import NavBarContainer from "./NavBarContainer";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const pagination: PaginationState = useSelector(
    (state: RootState) => state.page
  );
  const { page, perPage } = pagination;

  const logout = () => {
    dispatch(logOutUserThunk());
  };

  const navigateToPage = (route: string): void => {
    dispatch(resetCollectionActionCreator());
    navigate(`/${route}`);
    dispatch(loadEntriesThunk({ page, perPage }));
  };

  const navigateToInsights = (): void => {
    dispatch(resetCollectionActionCreator());
    navigate(`/insights`);
    dispatch(loadEntriesThunk({ page, perPage: 100 }));
  };

  return (
    <NavBarContainer>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand
            className="ml-auto"
            onClick={() => navigateToPage("home")}
          >
            Bonanza
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
            <Nav.Link onClick={() => navigateToPage("historic")}>
              Historic
            </Nav.Link>
            <Nav.Link onClick={() => navigateToInsights()}>Insights</Nav.Link>
            <Nav.Link onClick={() => navigateToPage("create")}>Create</Nav.Link>
          </Navbar.Collapse>
          <NavDropdown
            title={
              <span>
                User&nbsp;
                <FaUser size={20} color={"black"} />
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item onClick={() => navigateToPage("profile")}>
              My profile
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </NavBarContainer>
  );
};

export default NavBar;
