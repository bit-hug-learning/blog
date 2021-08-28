import styled from 'styled-components';
import theme from '../../styles/theme';

const iconLike = '/src/assets/icons/like.svg';
const iconComment = '/src/assets/icons/comment.svg';

const PostContainer = styled.div`
    .post {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 350px;
      height: 280px;
      margin: 5px 0;
      font-size: ${theme.size.m};
      color: ${theme.dark.text};
      background-color: ${theme.dark.postPrimary};
      border: 1px solid ${theme.dark.borderPrimary};
      border-radius: 8px;

      &__image {
        width: 38px;
        height: 38px;
        margin: 5px;
        margin-top: 25px;
        border-radius: 50%;
      }

      &__body {
        padding: 25px;
        padding-left: 5px;
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

      &__hashtags-container {
        display: flex;
        margin: 15px 0;
        /* justify-content: flex-start; */

        .post__hashtag {
          margin-bottom: 6px;
          margin-right: 8px;
          font-weight: bold;
        }
      }

      &__cta {
        display: flex;
        justify-content: space-between;

        .post__like-img {
          display: inline-block;
          width: 28px;
          height: 28px;
          background: url(${iconLike}) center/cover no-repeat;
        }

        .post__comment-img {
          display: inline-block;
          width: 28px;
          height: 28px;
          background: url(${iconComment}) center/cover no-repeat;
        }

      }


    }
    

`;

export default PostContainer;