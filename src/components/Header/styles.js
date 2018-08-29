import styled from 'styled-components';
import { Link } from '@reach/router';

export const Wrapper = styled.div`
  padding: 40px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  margin: 20px 0 0;
`;

export const StyledLink = styled(Link)`
  padding: 10px;
`;
