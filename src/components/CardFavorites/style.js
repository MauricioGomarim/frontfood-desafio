import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  display: flex;
    align-items: center;
    gap: 20px;
    width: 23%;
    margin-bottom: 20px;
    margin-right: 20px;
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
