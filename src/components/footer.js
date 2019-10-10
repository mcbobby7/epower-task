import React from 'react';
import Styled from 'styled-components';
import 'antd/dist/antd.css';

const FooterWrapper = Styled.div`
    padding: 10px;
    text-align: center;
    background-color: #001529;
    height: 50px;
    width: 100%;
    h5 {
        color: white;
    }
`;

const Header = () => {
    return (
        <FooterWrapper>
            <h5>copyright Mcbobby madu</h5>
        </FooterWrapper>
    );
};

export default Header;
