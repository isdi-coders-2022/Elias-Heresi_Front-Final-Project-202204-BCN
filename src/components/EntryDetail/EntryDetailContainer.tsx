import styled from "styled-components";

const EntryDetailContainer = styled.section`
  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    border: 2px solid grey;
    border-radius: 10%;
  }
  h2 {
    font-size: 32px;
  }
  .container {
    .row {
      margin: 30px 0;
      align-items: center;
      .col {
      }
      table {
        font-size: 24px;
      }
    }
  }
  .detail {
    &.__center {
      align-items: center;
    }
  }
`;

export default EntryDetailContainer;
