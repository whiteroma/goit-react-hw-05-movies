import styled from 'styled-components';

export const AboutMovie = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  & > img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 2px orangered;
    align-self: flex-start;
    margin-right: 20px;
  }
`;

export const AboutMovieText = styled.div`
  & > p {
    margin-bottom: 25px;
    margin-top: 5px;

    :last-child {
      color: orangered;
      font-weight: bold;
    }
  }
`;

export const AboutMovieTextSpan = styled.span`
  color: orangered;
  font-weight: bold;
`;
export const AdditionalDiv = styled.div`
  margin-top: 30px;
`;
export const AdditionalList = styled.ul`
  margin-top: 25px;
  display: flex;
`;
