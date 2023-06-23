import styled from "styled-components";

export const Container = styled.div`

  .swiper {
    display: flex !important;
    width: 100% !important;
  }

  .swiper-button-prev:after,.swiper-button-next:after {
    color: white;
  }
  > main {
    width: 80%;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;

    > p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 25px;
      margin-top: 64px;
    }

    .banner {
      display: flex;
    }

    .banner img {
      width: 100%;
    }

    @media (max-width: 767px){
      .banner {
      margin-top: 20px;
      flex-direction: column-reverse;
  
      .image-banner {
        width: 100%;
        padding: 0;
        > img {
          position: relative !important;
          bottom: -8px;
        }
      }

      .text-banner {
        width: 100%;
        text-align: center !important;
        margin-top: 0;
      }
    }
    }
    @media(max-width: 426px){
      .text-banner h1 {
        font-size: 35px;
      }
      .image-banner img{
   
      }
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  margin-top: 164px;

  > div:first-child {
    position: relative;
    padding: 150px 0;
  }
  > div {
    width: 50%;
    > img {
      position: absolute;
      bottom: -13px;
    }

    > h1 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
  }
`;
