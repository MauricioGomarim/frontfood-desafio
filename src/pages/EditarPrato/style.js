import styled from "styled-components";

export const Container = styled.section`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 100vh;
  display: flex;
  flex-direction: column;

  #image-prato {
    display: none;
  }

  .slcImage {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  main {
    width: 80%;
    margin: 0 auto;

    > a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
    }
  }
`;

export const Content = styled.section`
  margin-top: 24px;
  > h1 {
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 32px;
    @media (max-width:425px) {
        font-size: 25px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  font-size: 15px;
  .r1-col1 {
    width: 20%;
    div {
      height: 50px;
      display: flex;
      justify-content: center;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .r1-col3 {
    width: 20%;
    div {
      height: 50px;
      display: flex;
    }

    select {
      width: 100%;
      background: transparent;
      border: none;
      color: white;

      option {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      }
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .r1-col2 {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
    div {
      height: 50px;
      display: flex;
    }
  }

  .r2-col1 {
    margin-top: 26px;
    width: 75%;
    @media (max-width: 768px) {
      width: 100%;
    }

    input {
      min-width: 100px;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 5px !important;
      min-height: 50px;

      p {
        background-color: ${({ theme }) => theme.COLORS.GRAY_100};
        padding: 3px;
        font-size: 16px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
      }
    }
  }

  .r2-col2 {
    width: 20%;
    @media (max-width: 768px) {
      width: 100%;
    }
    div {
      height: 50px;
      display: flex;
    }

    margin-top: 26px;
  }

  .r2-col3 {
    width: 100%;
    margin-top: 20px;
    textarea {
      width: 100%;
      height: 200px;
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      resize: none;
    }
  }

  .button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .button button {
    margin-top: 20px;
    max-width: 200px;
  }
`;
