import styled from "styled-components";
import theme from "styles/theme";

const PostDetailContainer = styled.div`
  width: 100%;
  max-width: 714px;
  margin: 0 auto;


  .postdetail {
    display: flex;
    flex-direction: column;

    &__title {
      margin: 15px 20px 5px;
      font-size: ${theme.size.xl};
      color: white;
    }

    &__hashtag {
      margin-left: 10px;
    }

  }

  .creator {
    display: none;
    @media (min-width: 1280px) {
      display: inline-block;
    }

  }

`;

export default PostDetailContainer;