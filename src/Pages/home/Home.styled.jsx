import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TrendingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: -15px;
`;

export const TrendingItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 15px;
  justify-content: flex-start;
  flex-basis: calc((100% - 120px) / 4);
  box-shadow: 0px 0px 4px 2px orangered;
  :hover {
    color: orangered;
  }

  :nth-last-child(-n + 4) {
    margin-bottom: 20px;
  }
`;

export const TrendingLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: black;
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
`;
