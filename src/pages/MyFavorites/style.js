import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins";
  font-style: normal;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  min-width: 320px;
  min-height: 100%;

  main {
    width: 80%;
    margin: 50px auto 0;

    > h1 {
        font-size: 3rem;
    }
  }

  .text {
    display: flex;
    flex-direction: column;

    a {
        color: ${({ theme }) => theme.COLORS.RED_TOMATO};
        font-size: 14px;
    }
  }

  .Container-cards{
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 23%;
    margin-bottom: 20px;
    margin-right: 20px;


    span {
        font-size: 20px;
    }

    img {
        max-width: 100px;
    }


  }


`;
