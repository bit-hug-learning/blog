import styled from "styled-components";
import theme from "styles/theme";

const PostDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 25px auto;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
  }

  .postdetail {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 714px;
    background-color: ${theme.dark.postPrimary};

    &__image {
      height: 294px;
      object-fit: cover;
    }

    &__title {
      margin: 15px 20px 5px;
      font-size: ${theme.size.xl};
      color: white;
    }

    &__hashtag {
      margin-left: 10px;
    }

    &__text {
      margin: 20px;
      color: white;
      font-size: ${theme.size.m};
      font-weight: bold;
    }
  }

  .creator {
    display: none;
    @media (min-width: 1280px) {
      display: inline-block;
      position: relative;
      top: 10px;
    }
  }
`;

export default PostDetailContainer;