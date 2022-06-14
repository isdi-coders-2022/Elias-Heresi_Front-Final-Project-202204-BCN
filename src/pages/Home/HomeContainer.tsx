import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 90vh;
  .homepage {
    &__main {
      &--subtitle {
        font-size: 20px;
      }
    }
  }
  .card {
    margin: 25px 10px 35px 10px;
    margin-left: auto;
    margin-right: auto;
    &-title,
    &-text {
      text-align: center;
    }

    &-body {
      display: flex;
      align-items: center;
      flex-flow: column;
      text-align: center;
    }
    &-img-top {
      object-fit: cover;
      height: 250px;
      width: auto;
    }
  }
  h2 {
    text-align: center;
    margin-top: 30px;
  }

  h1 {
    padding-top: 25px;
    text-align: center;
  }

  div.card {
    height: 400px;
  }
`;
