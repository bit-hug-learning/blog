import styled from 'styled-components';
import theme from '../../styles/theme';

const iconLike = '/src/assets/icons/like.svg';
const iconComment = '/src/assets/icons/comment.svg';

const PostContainer = styled.div`
    .post {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 95%;
      min-width: 320px;
      @media (max-width: ${theme.breakpoints.sm}) {
        min-width: 95vw;
      }
      max-width: 692px;
      min-height: 280px;
      padding: 30px 0;
      margin: 10px auto;
      font-size: ${theme.size.m};
      color: ${theme.dark.text};
      background-color: ${theme.dark.postPrimary};
      border: 1px solid ${theme.dark.borderPrimary};
      border-radius: 8px;

      &.secondary {
        background-color: ${theme.dark.postSecondary};

        &:hover {
        background-color: #6B869B;
      }
      }

      &:hover {
        background-color: ${theme.dark.postPrimaryHover};
      }

      &__avatar {
        margin: 3px 5px 0px 8px;
        border-radius: 50%;
      }

      &__body {
        margin: 0 5px;

        &.secondary {
          width: 93%;
        }
      }

      &__autor {
        font-weight: bold;
      }

      &__date {
        font-size: ${theme.size.s};
      }

      &__title {
        margin: 10px 0;
      }

      &__copy {
        min-height: 42px;
      }

      &__hashtags-container {
        display: flex;
        margin: 15px 0;

        .post__hashtag {
          margin-bottom: 6px;
          margin-right: 8px;
          font-weight: bold;
        }
      }

      &__cta {
        display: flex;
        justify-content: flex-start;
        @media (max-width: 365px) {
          font-size: ${theme.size.s};
        }
        font-weight: bold;

        .post__like, .post__comment {
          display: flex;
          align-items: center;
          margin-right: 20px;

          @media (min-width: ${theme.breakpoints.md}) {
            margin-right: 50px;
          }
          @media (min-width: ${theme.breakpoints.lg}) {
            margin-right: 80px;
            
          }
        }

        .post__like.secondary, .post__comment.secondary {
            @media (min-width: ${theme.breakpoints.sm}) {
            margin-right: 10px;
            font-size: 1.2rem;    
            }
        }

        .post__like-img, .post__comment-img {
          display: inline-block;
          width: 28px;
          height: 28px;
          margin-right: 5px;
          cursor: pointer;
        }

        .post__like-img {
          background: url(${iconLike}) center/cover no-repeat;

          &:hover {
            filter: brightness(0) saturate(100%) invert(65%) sepia(64%) saturate(2665%) hue-rotate(307deg) brightness(101%) contrast(99%);
          }
        }

        .post__comment-img {
          background: url(${iconComment}) center/cover no-repeat;

          &:hover {
            filter: brightness(0) saturate(100%) invert(71%) sepia(6%) saturate(640%) hue-rotate(274deg) brightness(100%) contrast(90%);
          }
        }

      }


    }
    

`;

export default PostContainer;