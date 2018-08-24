import React from 'react';
import { H1, H2 } from '../AppStyles/styles';

const Header = ({ title, description }) => (
  <div style={{ padding: '40px' }}>
    <H1>{title}</H1>
    <H2>{description}</H2>
    <div>
      <a href="#">info</a>
    </div>
    <div>
      <form>
        <label>
          <span>Add artwork to your gallery</span>
          <input placeholder="dat://qqqqqqqqqqq/art/example.json" />
          <input type="submit" />
        </label>
      </form>
    </div>
  </div>
);

export default Header;
