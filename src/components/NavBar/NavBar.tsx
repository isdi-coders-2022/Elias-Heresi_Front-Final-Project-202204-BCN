import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { logOutUserThunk } from "../../redux/thunks/userThunks/userThunks";
import NavBarContainer from "./NavBarContainer";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logOutUserThunk());
  };

  const navigateToPage = (page: string): void => {
    navigate(`/${page}`);
  };

  return (
    <NavBarContainer>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand
            onClick={() => navigateToPage("historic")}
            className="ml-auto"
          >
            Bonanza
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
            <Nav.Link onClick={() => navigateToPage("historic")}>
              Historic
            </Nav.Link>
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
            <NavDropdown.Item>My profile</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </NavBarContainer>
  );
};

export default NavBar;
