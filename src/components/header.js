import React from 'react';
import Styled from 'styled-components';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const HeaderWrapper = Styled.div`
    padding: 30px;
    text-align: center;
    background-color: #001529;
    height: 100px;
    width: 100%;
    h1 {
        color: white;
    }
    .link {
        float: left;
        color: white;
        padding-left: 10px;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="link">
                <Link to="/">Home</Link>
            </div>
            <h1>E POWER BLOG </h1>
        </HeaderWrapper>
    );
};

export default Header;
