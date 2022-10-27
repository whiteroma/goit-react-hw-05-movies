import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;

  & > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-left: -15px;

    & > li {
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
    }
  }

  & > form {
    display: flex;
    align-items: center;

    & > span {
      font-weight: bold;
      color: red;
    }
  }
`;

export const Input = styled.input`
  width: 250px;
  height: 20px;
  font-size: 15px;
  margin-right: 3px;

  :focus-within {
    border-color: orangered;
  }

  :focus-visible {
    border-color: orangered;
  }

  :focus {
    border-color: orangered;
  }
`;

export const SearchBtn = styled.input`
  padding: 4px 8px;
  background-color: orangered;
  color: white;
  border-radius: 4px;
  border-color: orangered;
  margin-left: 5px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const MoviesLink = styled(Link)`
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
