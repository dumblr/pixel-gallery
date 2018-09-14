import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 40px 160px;
`;

export const Container = styled.div`
  display: flex;
`;

export const Header = styled.div`
  margin: 0 0 40px;
`;

export const ColorPickerContainer = styled.div`
  margin-left: 40px;
`;

export const Input = styled.input`
  display: block;
  margin: 0 0 10px;
  height: 21px;
  border: 1px solid #000;
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
