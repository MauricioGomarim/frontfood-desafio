import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.RED};
    width: 100%;
    padding: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    border-radius: 5px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`