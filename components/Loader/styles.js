import styled from 'styled-components';

const loader = '/src/assets/icons/loader.svg';

const LoaderContainer = styled.div`
  text-align: center;

  .loader {
    display: inline-block;
    width: 200px;
    height: 200px;
    margin: calc( 50vh - 100px) 0;
    background: url(${loader}) center/cover no-repeat;
  }
`;

export default LoaderContainer;