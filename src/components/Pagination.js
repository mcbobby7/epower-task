import React from 'react';
import Styled from 'styled-components';
import { Button } from 'antd';

const Paginate = Styled.div`
    margin-left: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    
    .button {
        margin-left: 20px;
        margin-bottom: 20px;
    }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Paginate>
            {pageNumbers.map(number => (
                <span key={number} className="button">
                    <Button onClick={() => paginate(number)} href="#">
                        {number}
                    </Button>
                </span>
            ))}
        </Paginate>
    );
};

export default Pagination;
