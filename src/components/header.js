import React from 'react';
import Styled from 'styled-components';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const HeaderWrapper = Styled.div`
    padding: 30px;
    text-align: center;
    background-color: #001529;
    height: 120px;
    width: 100%;
    h1 {
        color: white;
    }
    .link {
        float: left;
        color: white;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>E POWER BLOG </h1>
            <div className="link">
                <Link to="/">Home</Link>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
