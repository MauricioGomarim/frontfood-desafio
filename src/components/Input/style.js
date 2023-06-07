import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #c4c4cc;
    margin-bottom: 8px;
  }

  > input {
    background-color: transparent;
    border: 1px solid white;
    padding: 15px;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }

  > input::placeholder {
    color: #7c7c8a;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;
