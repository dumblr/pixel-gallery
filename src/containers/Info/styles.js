import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px;
  max-width: 34em;

  p,
  ul,
  ol,
  li,
  blockquote {
    line-height: 1.4em;
  }

  code {
    font-weight: bold;
  }

  blockquote {
    margin: 20px 0;
    padding: 0px 30px;
    font-style: italic;
    border-left: 2px solid rgba(40, 44, 52, 1);
  }
`;

export const Section = styled.div`
  margin: 0 0 80px;
`;
