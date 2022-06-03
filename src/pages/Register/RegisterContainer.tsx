import styled from "styled-components";

export const RegisterContainer = styled.div`
  height: auto;
  min-height: 100vh;
  background-color: rgb(111, 219, 135);
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      padding: 15px 0;
      font-weight: bold;
    }
    h2 {
      font-size: 24px;
    }

    div {
      margin-bottom: 20px;
    }

    .register__form {
      margin-bottom: 20px;
    }
  }
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    border: 2px solid grey;
    border-radius: 20%;
  }
  @media (max-width: 800px) {
    .form__image {
      display: none;
    }
  }
`;
