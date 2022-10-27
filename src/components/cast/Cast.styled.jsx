import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  list-style: none;
  justify-content: space-between;
  padding: 15px;
  margin-left: -10px;
  transition: transform 3s ease-in-out;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 20px;
  justify-content: space-between;
  flex-basis: calc((100% - 60px) / 4);
  border-bottom: 1px solid orangered;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    color: orangered;
  }

  & > img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 2px orangered;
  }

  & > h4 {
    padding: 15px;
    margin: 0 auto;
  }

  & > div {
    padding: 10px;
    text-align: center;
  }
`;

export const CastSpan = styled.span`
  color: orangered;
  font-weight: bold;
`;
