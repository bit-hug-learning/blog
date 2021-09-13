import styled from "styled-components";
import theme from "styles/theme";
const likeIcon = "/src/assets/icons/like.svg";
const commentIcon = "/src/assets/icons/comment.svg";

const CommentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  color: white;
  font-size: 1.6rem;

  .comment {

    &__avatar {
      border-radius: 50%;
    }

    &__card {
      width: calc(100% - 48px);
      margin-left: 10px;
    }
    &__body {
      width: 100%;
      height: auto;
      padding: 12px;
      border: 1px solid ${theme.dark.borderPrimary};
      border-radius: 8px;
      background-color: ${theme.dark.postPrimaryHover}${90};

      &.add-comment {
        background-color: ${theme.dark.postPrimaryHover};
      }
    }

    &__textarea {
      width: calc( 100% - 10px);
      height: calc( 100% - 10px);
      border: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Neue, sans-serif;
      resize: none;
      background-color: ${theme.dark.postPrimaryHover};
      border-radius: 8px;
      color: white;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #FFFFFF65;
      }
    }

    &__name, &__date {
      display: inline;
    }

    &__date {
      font-size: ${theme.size.s};
    }

    &__copy {
      margin: 12px 0;
    }

    &__cta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 220px;
      margin-top: 10px;

      @media (min-width: ${theme.breakpoints.md}) {
        width: 320px;
      }
      @media (min-width: ${theme.breakpoints.lg}) {
        width: 420px;
      }
    }

    &__like, &__comment {
      display: inherit;
      justify-content: inherit;
      align-items: inherit;
      line-height: 28px;
    }

    &__like-img, &__comment-img {
      display: inline-block;
      width: 28px;
      height: 28px;
      margin-right: 5px;
      filter: brightness(0) saturate(100%) invert(74%) sepia(52%) saturate(871%) hue-rotate(180deg) brightness(101%) contrast(102%);
      cursor: pointer;
    }

    &__like-img {
      background: url(${likeIcon}) center/cover no-repeat;

      &:hover {
        filter: brightness(0) saturate(100%) invert(33%) sepia(67%) saturate(2480%) hue-rotate(193deg) brightness(101%) contrast(104%);
      }
    }

    &__comment-img {
      background: url(${commentIcon}) center/cover no-repeat;
    }
  }
`;

export default CommentContainer;