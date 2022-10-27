import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ReviewsItem = styled.li`
  gap: 10px;
  margin-top: 15px;

  & > p {
    font-size: 0.94em;
    color: #363434;
    margin: 10px 0 0px 20px;
    text-align: justify;
  }

  & > h5 {
    text-align: end;
  }
`;

export const ReviewsSpan = styled.span`
  color: orangered;
  font-weight: bold;
`;

export const ReviewText = styled.div``;
