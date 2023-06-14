import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ESCURO_2};
  text-align: center;
  margin-top: 1rem;
  padding: 40px 0 50px 0;

  > .Infos-card {
    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 15px;
    }

    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      color: #82f3ff;
      margin-bottom: 15px;
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.COLOR_GRAY};
      margin-bottom: 15px;
    }
    img {
      max-width: 200px;
      margin-bottom: 15px;
    }
  }

  > .card-footer {
    display: flex;
    justify-content: center;
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
        padding: 10px 30px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.RED};
        border-radius: 10px;
      }
    }
  }
`;
