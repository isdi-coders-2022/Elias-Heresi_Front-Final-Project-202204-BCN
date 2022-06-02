import styled from "styled-components";

export const RegisterContainer = styled.div`
  height: 100%;
  background-color: rgb(111, 219, 135);
  text-align: center;
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
  }
  img {
    width: 500px;
    height: 400px;
    object-fit: cover;
  }
  @media (max-width: 800px) {
    .register__image {
      display: none;
    }
  }
`;