import styled from "styled-components";

export const EntrySummaryContainer = styled.section`
  font-size: 17px;
  .card {
    width: 18rem;
    height: 250px;
    &-text {
    }
    &-subtitle {
      color: darkgray;
      font-size: 16px;
    }
    &-title {
      font-size: 18px;
      font-weight: bold;
    }
    &-text {
      height: 105px;
    }
    .summary {
      &__top {
        height: 25px;
      }
      &__header {
        align-items: center;
      }
      &__mid {
        height: 136px;
        col {
          margin: auto;
        }
      }
    }
  }
  canvas {
  }
`;
