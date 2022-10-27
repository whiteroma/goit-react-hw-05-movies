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
  flex-basis: calc((100% - 60px) / 4);
  border-bottom: 1px solid orangered;
  transition: transform 3s ease-in-out;

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
    transform: scale(1.05);
    color: orangered;
  }

  & > img {
    max-width: auto;
    max-height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 2px orangered;
  }

  & > h4 {
    padding: 15px;
    margin: 0 auto;
  }
`;
