import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #192227;
  border-radius: 10px;
  padding: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 20px;
  .Contet-card {
    .text-hora {
      display: flex;
      justify-content: space-between;
      gap: 5px;
    }
    .items {
        margin-bottom: 20px;
    }

    .center {
        justify-content: center;
    }

    select {
      width: 100%;
      padding: 20px;
      background: #0d1d25;
      color: white;
      border: none;
      border-radius: 10px;
      outline: none;

      option {
        background-color: transparent !important;
        margin: 10px;
      }
    }

    @media (max-width: 426px){
        font-size: 15px;
    }
  }
`;
