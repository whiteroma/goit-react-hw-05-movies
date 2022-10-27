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
      flex-basis: calc((100% - 60px) / 4);
      border-bottom: 1px solid orangered;
      transition: transform 3s ease-in-out;
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
  border-radius: 4px;

  &:focus-within {
    outline-color: orangered !important;
  }

  &:focus-visible {
    outline-color: orangered !important;
  }

  &:focus {
    outline-color: orangered !important;
  }

  &:active {
    outline-color: orangered !important;
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
    transform: scale(1.05);
  }

  & > img {
    max-width: 100%;
    max-height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 2px orangered;
  }

  & > h4 {
    padding: 15px;
    margin: 0 auto;
  }
`;
