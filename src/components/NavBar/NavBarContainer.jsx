import styled from "styled-components";

const NavBarContainer = styled.section`
  nav {
    span {
      &.navbar-brand {
        font-size: 36px;
        cursor: pointer;
      }
    }
    background-color: rgb(111, 219, 135);
    a {
      color: black;
      font-size: 24px;
    }
  }
`;

export default NavBarContainer;
