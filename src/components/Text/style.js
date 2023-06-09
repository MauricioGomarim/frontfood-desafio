import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  font-style: normal;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};

  }
`;
