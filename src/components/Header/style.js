import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 100%;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > nav {
    width: 80%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    div img {
      width: 100%;
      max-width: 250px;
    }
    .newDish {
      a {
        padding: 0 !important;
      }
    }

    > div:nth-child(1) {
      width: 23%;
      margin-right: 2%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > div:nth-child(2) {
      width: 48%;
      margin-right: 2%;
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 10px 3%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      > svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
      > input {
        width: 100%;
        background-color: transparent;
        border: none;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
    > div:nth-child(3) {
      width: 25%;
      display: flex;
      align-items: center;
      gap: 20px;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;

      > a {
        background-color: ${({ theme }) => theme.COLORS.RED};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 15px 40px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: 100%;
      }

      > svg {
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        cursor: pointer;
      }
    }
  }
`;
