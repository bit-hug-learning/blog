import styled from 'styled-components';
import theme from '../../styles/theme';
import iconLike from '../../public/src/assets/icons/like.svg';
import iconComment from '../../public/src/assets/icons/comment.svg';


const PostContainer = styled.div`
    .post {
      width: 350px;
      height: 280px;
      font-size: ${theme.size.m};
      color: ${theme.dark.text};
      background-color: ${theme.dark.postPrimary};
      border: 1px solid ${theme.dark.borderPrimary};
      border-radius: 8px;

      &__autor {
        font-weight: bold;
      }

      &__date {
        font-size: ${theme.size.s};
      }

      &__title {

      }

      &__

    }
    

`;

export default PostContainer;