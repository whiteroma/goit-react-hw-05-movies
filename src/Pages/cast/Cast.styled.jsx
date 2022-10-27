import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  list-style: none;
  justify-content: space-between;
  padding: 15px;
  margin-left: -10px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 20px;
  justify-content: space-between;
  width: calc(25% - 10px);
  box-shadow: 0px 0px 4px 2px orangered;
  :hover {
    color: orangered;
  }

  & > img {
    width: 100%;
    height: auto;
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
