import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 20em;
  margin: 20px 0;
  border: 1px solid #000;
  padding: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

export const ArtistName = styled.h1`
  margin: 0 0 4px;
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
`;

export const ArtworkTitle = styled.h2`
  margin: 0 0 6px;
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
  font-style: italic;
  > span {
    font-weight: normal;
    font-style: normal;
  }
`;

export const ArtworkMedium = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  line-height: 14px;
`;

export const ArtworkDescription = styled.p`
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 14px;
`;

export const ArtworkCopyright = styled.p`
  margin: 20px 0 4px;
  font-size: 11px;
  line-height: 11px;
`;
