import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 0 50px;

  > h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    margin-top: 50px;
  }
`;
