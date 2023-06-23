import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  display: flex;
  align-items: center;
  gap: 20px;
  width: 23%;
  margin-bottom: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
      width: 46%;
  }

  @media (max-width: 625px) {
      width: 100%;
  }

  span {
    font-size: 20px;
  }

  .text {
    div {
      margin: 0;
    }
  }

  img {
    max-width: 100px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  
`;
