import styled from 'styled-components';
import frame from '../../assets/frame.png';

export const Wrapper = styled.div`
  margin: 0 auto 240px;
  padding: 20px 40px;
`;

export const Container = styled.div`
  border: 2px solid #000;
  width: 480px;
  height: 480px;

  border-image: url(${frame}) 93 92 87 92 stretch stretch;
  border-color: #f4be52;
  border-style: inset;
  border-width: 60px;
`;

export const Button = styled.button`
  border: none;
  background-color: #000;
  color: white;
  padding: 5px 9px;
  margin-left: 18px;
  cursor: pointer;
`;
