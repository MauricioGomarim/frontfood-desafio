import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  font-family: "Poppins", sans-serif;

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

      .quantidade {
        display: flex;
        gap: 10px;

        > svg {
          font-size: 30px;
          cursor: pointer;
        }
      }

      .add {
        margin-left: 20px;
        a {
            text-align: center;
            display: flex;
            font-size: 20px;
          padding: 10px 30px;
          color: ${({ theme }) => theme.COLORS.WHITE};
          background-color: ${({ theme }) => theme.COLORS.RED};
          border-radius: 10px;
        }
      }
    }
  }
`;

export const SectionTags = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
`;
