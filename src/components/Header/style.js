import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 100%;
  padding: 30px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  .nav-menu {
    display: none;
    justify-content: space-between;

    width: 100%;
    gap: 3.2rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: "Poppins", sans-serif;
      font-size: 25px;
    }

    svg {
      font-size: 30px;
    }


  }

  .newDish {
    svg, a {
      transition: all .3s ease-in-out;
    }

  }
  .newDish svg:hover{
    transform: scale(1.5);
  } 
  a{
     transition: all .4s ease;
  }
   a:hover {
    transform: scale(1.1);
  }
  .hamburger {
    display: none;
  }

  .bar {
    display: block;

    width: 25px;
    height: 3px;
    margin: 5px auto;

    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
  }

  @media only screen and (max-width: 768px) {
    max-width: 768px;

    .nav-menu {
      flex-direction: column;
      align-items: center;
      text-align: center;
      display: flex;

      position: fixed;
      left: -100%;
      top: 10.4rem;
      z-index: 9999;

      width: 100%;
      height: 35rem;
      gap: 2rem;
      padding: 5rem 5rem 3rem;
      border-radius: 0 0 2rem 2rem;
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

      transition: 0.3s;

      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-item {
      margin: 2.5rem 0;
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  .search {
    position: relative;

    @media (max-width: 768px) {
      display: none !important;
    }
  }
  > nav {
    width: 85%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div img {
      width: 100%;
      min-width: 200px;
      max-width: 250px;
    }
    .newDish {
      a {
        padding: 0 !important;
      }
    }

    .icon-dishMobile svg {
      font-size: 25px;
    }

    .icon-dishMobile a {
      color: white;
    }
    .icon-dishMobile p {
      background-color: red;
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      padding: 5px;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      font-size: 10px;
      font-family: "Roboto", sans-serif;
    }

    .icon-dishMobile {
      position: relative;
      display: none;

      @media (max-width: 768px) {
        display: flex !important;
      }
    }

    > .col1 {
      width: 23%;
      margin-right: 1%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > .search {
      width: 25%;
      margin-right: 1%;
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 10px 3%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      > svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
      > input {
        width: 100%;
        background-color: transparent;
        border: none;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
    > .col3 {
      width: 29%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-right: 1%;

      font-family: "Poppins";
      @media (max-width: 768px) {
        display: none !important;
      }

      > a {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        display: flex;
        align-items: center;
        width: 50%;
        justify-content: center;
        text-align: center;
      }
    }
    > .newDish {
      width: 20%;
      display: flex;
      align-items: center;
      gap: 20px;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      @media (max-width: 768px) {
        display: none !important;
      }
      > a {
        background-color: ${({ theme }) => theme.COLORS.RED};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 15px 40px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: 100%;
        height: 100%;
        font-size: 16px;
      }

      > svg {
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        cursor: pointer;
      }
    }
  }
`;

export const Busca = styled.div`
  background-color: #065e7c;
  width: 100%;
  position: absolute;
  min-height: 100px;
  left: 0;
  top: 100%;
`;

export const Search = styled.div`
  align-self: center;

  width: 100%;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem;
    border: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1.6rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
