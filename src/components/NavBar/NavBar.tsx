import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useAppDispatch } from "../../redux/store/hooks";
import { logOutUserThunk } from "../../redux/thunks/userThunks/userThunks";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Bonanza</Navbar.Brand>
        <Navbar.Toggle aria-controls="/historic" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/historic">Home</Nav.Link>
            <Nav.Link href="/historic">Past entries</Nav.Link>
            <Nav.Link href="#link">Know thyself</Nav.Link>
            <NavDropdown
              title={
                <span>
                  User&nbsp;
                  <FaUser size={20} color={"black"} />
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
