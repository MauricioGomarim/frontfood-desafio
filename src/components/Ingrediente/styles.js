import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : `none`};
  border-radius: 10px;

  > button {
    border: none;
    background: none;
  }

  .add-ingrediente {
    border-radius: 10px;
    padding: 5px;
  }


  .button-delete {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;
  }

  .delete-ingrediente {
    background-color: #76797b;
    border-radius: 10px;
    padding: 5px;

    input::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;
  }

  > input {
    max-width: 100px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
