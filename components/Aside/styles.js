import styled from 'styled-components';
import theme from 'styles/theme';

const AsideContainer = styled.div`
  .aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 388px;
    height: 100vh;
    color: white;
    background-color: ${theme.dark.postPrimary};
    @media (max-width: ${theme.breakpoints.lg}) {
      display: none;
    }

    &__section {
      width: 340px;
      padding: 10px;
      padding-bottom: 20px;
      margin: 10px 0;
      border: 1px solid ${theme.dark.borderPrimary};
      border-radius: 8px;
      background-color: ${theme.dark.primary};

      &--filter {
        margin-top: 50px;
      }
    }

    &__subtitle {
      margin: 14px 10px 14px;
      font-size: 2rem;
      font-weight: bold;

    }
  }
`;

export default AsideContainer;