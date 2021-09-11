import styled from 'styled-components';
import theme from 'styles/theme';

export const HeaderContainer = styled.header`
  background-color: ${theme.dark.primary};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);

  & > * + * {
    margin-left: 1rem;
  }

  button {
    cursor: pointer;
  }

  .icon {
    background-color: transparent;
    border: none;

    img {
      width: 3rem;
    }
  }

  .hamburger {
    margin-right: auto;
  }

  .logo {
    font-size: 2rem;
    color: white;
    font-weight: bold;
    display: none;
    margin-right: auto;
  }

  .login-btn {
    background-color: ${theme.dark.lightBlue};
    border: none;
    padding: 1rem;
    border-radius: 8px;
    font-weight: bold;
    font-size: 2rem;
  }

  .searchbar {
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    margin: auto;
    display: none;

    input {
      background: none;
      border: none;
      color: white;
      width: 30rem;
      font-size: 1.8rem;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: white;
      }
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    .hamburger {
      display: none;
    }

    .logo {
      display: block;
    }

    .searchbar {
      display: flex;
    }

    .search {
      display: none;
    }
  }
`;
