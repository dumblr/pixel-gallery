import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  border: 1px solid black;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  margin-bottom: 20px;
  width: 420px;
  max-width: 30em;
  display: ${props => (props.opened ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 20px);
`;

export const Input = styled.input`
  height: 21px;
  border: 1px solid #000;
  margin: 0;
  padding-left: 3px;
  padding-right: 3px;
  width: 200px;
`;

export const Button = styled.button`
  border: 1px solid #000;
  background-color: ${props =>
    props.opened ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,1)'};
  color: white;
  padding: 5px 9px;
  cursor: pointer;
  outline: none;
  height: 25px;
`;

export const Text = styled.p`
  font-size: 13px;
  line-height: 15px;
`;

export const Span = styled.span`
  font-size: 13px;
  line-height: 15px;
  margin-left: 15px;
`;
