import styled from 'styled-components';
import { Link } from '@reach/router';

export const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

export const Form = styled.form`
  margin: 20px 0 0;
`;

export const StyledLink = styled(Link)`
  padding: 10px;
`;

export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 20px;
  position: absolute;
  top: 100%;
  width: 300px;
`;

export const CreateButton = styled.button`
  border: none;
  background: ${props => (props.disabled ? 'rgba(0,0,0,0.5)' : '#000')};
  color: #fff;
  padding: 10px 15px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const AddWrapper = styled.div`
  margin: 20px 0 0;
  border: 1px solid #000;
  padding: 15px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

export const AddTitle = styled.h4`
  margin: 0 0 10px;
`;

export const AddInput = styled.input`
  height: 21px;
  border: 1px solid #000;
  margin: 0;
  padding-left: 3px;
  padding-right: 3px;
  width: 200px;
`;

export const AddButton = styled.button`
  border: 1px solid #000;
  background-color: ${props =>
    props.opened ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,1)'};
  color: white;
  padding: 5px 9px;
  cursor: pointer;
  outline: none;
  height: 25px;
`;
