import styled from "styled-components";

export const EditFormContainer = styled.div`
  border: 2px grey solid;
  padding: 20px 30px;
  border-radius: 25px;
  background-color: rgb(255, 255, 255);
  width: 80%;
  max-width: 500px;
  form {
    min-width: 230px;
    max-width: 500px;
    .create-form {
      &__slider {
        margin-bottom: 0px;
      }

      &__date {
        margin-bottom: 20px;
      }

      &__sublabel {
        font-weight: 400;
        font-size: 20px;
      }
    }
    div {
      font-weight: bold;
      font-size: 24px;
      input {
        &#image {
          margin-bottom: 40px;
        }
      }
      textarea {
        margin-bottom: 40px;
      }
    }
    span {
      width: 90%;
      input {
        width: 100%;
      }
    }
    section {
      font-size: 30px;
      display: flex;
      flex-direction: column;
      button {
        margin-bottom: 20px;
      }
    }
  }
`;
