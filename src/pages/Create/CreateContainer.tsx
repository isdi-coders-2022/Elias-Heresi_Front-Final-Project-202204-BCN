import styled from "styled-components";

export const CreateContainer = styled.div`
  height: auto;
  min-height: 100vh;
  text-align: center;
  align-items: top;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      padding: 15px 10px;
      font-weight: bold;
    }
    h2 {
      font-size: 24px;
    }

    div {
      margin-bottom: 20px;
    }
  }
`;
