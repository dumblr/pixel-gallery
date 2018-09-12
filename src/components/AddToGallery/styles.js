import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 20px;
  max-width: 30em;
  display: ${props => (props.opened ? 'block' : 'none')};
`;

export const Button = styled.button`
  border: none;
  background-color: #000;
  color: white;
  padding: 5px 9px;
`;
