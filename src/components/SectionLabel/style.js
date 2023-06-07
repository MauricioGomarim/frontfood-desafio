import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-weight: 400;
    font-size: 16px;
    color: #c4c4cc;
    margin-bottom: 10px;
  }

  > div {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 10px;
    border-radius: 10px;

    input {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }
  }
`;
