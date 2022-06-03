import styled from "styled-components";

const NavBarContainer = styled.section`
  nav {
    background-color: rgb(111, 219, 135);
    a {
      color: black;
      font-size: 24px;
      &.navbar-brand {
        font-size: 28px;
        font-weight: bold;
      }
    }
  }
`;

export default NavBarContainer;
