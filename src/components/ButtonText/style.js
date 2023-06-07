import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  font-style: normal;
  margin-top: 32px;

  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 24px;

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
