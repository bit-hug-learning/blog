import styled from 'styled-components';

export const ExampleContainer = styled.div`
  background: red;
  padding: 1rem;

  &:hover {
    background: blue;
  }

  p {
    color: azure;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    background: green;
  }
`;
