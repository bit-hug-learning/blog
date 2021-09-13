import styled from 'styled-components';
import theme from '../../styles/theme';

export const ExampleContainer = styled.div`
  background: red;
  padding: 1rem;

  &:hover {
    background: blue;
  }

  p {
    color: azure;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    background: green;
  }
`;
