import React from 'react';
import { H1, H2 } from '../AppStyles/styles';
import { Link } from '@reach/router';
import { Wrapper, TopContainer, Form, StyledLink } from './styles';

const Header = ({ title, description }) => (
  <Wrapper>
    <TopContainer>
      <div>
        <H1>{title}</H1>
        <H2>{description}</H2>
      </div>
      <div>
        <StyledLink to="info">/info</StyledLink>
        <StyledLink to="canvas">/canvas</StyledLink>
      </div>
    </TopContainer>

    <Form>
      <label>
        <span>Add artwork to your gallery</span>
        <input placeholder="dat://qqqqqqqqqqq/art/example.json" />
        <input type="submit" />
      </label>
    </Form>
  </Wrapper>
);

export default Header;
