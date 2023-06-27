import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  font-family: "Poppins", sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > main {
    width: 80%;
    max-width: 100%;
    margin: 30px auto 0px;

    > a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};



  .col1 {
    width: 40%;
    margin-right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      max-width: 100%;
    }
  }

  .col2 {
    width: 50%;
    > h1 {
      font-weight: 500;
      font-size: 40px;
    }

    > p {
      font-weight: 400;
      font-size: 23px;
    }

    > .card-footer {
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 35px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      max-width: 100%;
      gap: 20px;
      > a {
        width: fit-content;
      }

      .add {
        margin-left: 20px;
        padding: 10px 30px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.RED};
        border-radius: 10px;
        cursor: pointer;
        a {
          color: white;
        }
      }

      .quantidade {
        display: flex;
        gap: 10px;

        > div {
          margin-top: 0 !important;

          a {
            display: flex;
          }

          > svg {
            font-size: 30px;
            cursor: pointer;
          }
        }
      }
      > button {
        width: fit-content;
      }
    }
  }

  @media (max-width:767px) {
    flex-direction: column;

    .col1 {
      width: 100% !important;

      img {
        max-width: 250px !important;
      }
    }
    .col2 {
      width: 100% !important;
    }
  }
`;

export const SectionTags = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
`;
