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
  width: 240px;
`;

export const CreateButton = styled.button`
  border: none;
  background: #000;
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
`;

export const AddWrapper = styled.div`
  margin: 20px 0 0;
  border: 1px solid #000;
  padding: 15px;
`;

export const AddTitle = styled.h4`
  margin: 0 0 10px;
`;
