import styled from 'styled-components';
import theme from 'styles/theme';

const CreatorContainer = styled.div`
  .creator {
    position: relative;
    width: 100vw;
    max-width: 714px;
    margin: 100px auto;
    font-size: ${theme.size.m};
    background-color: ${theme.dark.primary};
    border: 1px solid ${theme.dark.borderSecondary};
    border-radius: 8px;
    color: white;

    &.postdetail {
      width: 375px;
      margin: 24px 16px 16px;
    }

    &__info {
      margin: 25px;
      margin-top: 80px;
    }

    &__avatar {
      position: absolute;
      top: -45px;
      left: calc(50% - 45px);
      width: 90px;
      height: 90px;
      border: 1px solid ${theme.dark.borderSecondary};
      border-radius: 50%;
    }

    &__author {
      text-align: center;
      margin: 15px 0;
      font-size: ${theme.size.xl};
    }

    &__description {
      margin: 25px 0;
      text-align: justify;
      text-align-last: center;
    }

    &__header {
      margin: 10px 0 5px;
      font-size: ${theme.size.m};
    }

    &__contact {
      display: flex;
      justify-content: center;
      margin: 25px 0;
      list-style: none;
    }

    &__contact-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      margin: 0 10px;
    }

    &__contact-logo {
      filter: invert(100%);

      &:hover {
        filter: invert(100%) brightness(0) saturate(100%);
        transform: scale(1.5, 1.5);
        transition: transform 0.1s ease-in;
      }
    }
  }
`;

export default CreatorContainer;
