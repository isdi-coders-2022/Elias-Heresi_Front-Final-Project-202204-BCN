import styled from "styled-components";

const EntryDetailContainer = styled.section`
  img {
    width: 80%;
    height: 400px;
    object-fit: cover;
    border: 2px solid grey;
    border-radius: 10%;
  }
  h2 {
    font-size: 32px;
  }
  .container {
    .row {
      .col {
        margin-bottom: 30px;
      }
      .col-md-6 {
        margin-bottom: 30px;
      }
      table {
        font-size: 24px;
      }
    }
  }
`;

export default EntryDetailContainer;
