import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useAppDispatch } from "../../redux/store/hooks";
import { logOutUserThunk } from "../../redux/thunks/userThunks/userThunks";
import NavBarContainer from "./NavBarContainer";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <NavBarContainer>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
            <Nav.Link href="/historic">Historic</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Navbar.Collapse>
          <Navbar.Brand href="/historic" className="ml-auto">
            Bonanza
          </Navbar.Brand>
          <NavDropdown
            title={
              <span>
                User&nbsp;
                <FaUser size={20} color={"black"} />
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/historic">My profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </NavBarContainer>
  );
};

export default NavBar;
