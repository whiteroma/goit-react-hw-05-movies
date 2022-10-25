import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingItem = styled.li`
    gap: 15px;
:hover {
        color: orangered
    }

`

export const TrendingLink = styled(Link)`
text-decoration: none;
color: black;
:hover {
        color: orangered
    }
`