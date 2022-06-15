import styled from "styled-components";

export const DateFilterContainer = styled.span`
  margin: auto;
  width: 100%;
  form {
    * {
      margin: 10px 0;
    }
    max-width: 900px;
    display: flex;
    align-items: center;
    button {
      width: 150px;
    }
    input {
      width: 300px;
      height: 45px;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }

  @media (min-width: 901px) {
    max-width: 900px;
    div {
      width: 75%;
    }
  }

  @media (max-width: 900px) {
    form {
      flex-direction: column;
      align-items: center;
      div {
        width: 320px;
        flex-direction: row;
      }
    }
  }
`;
