import React from 'react';
import Styled from 'styled-components';
import 'antd/dist/antd.css';
import { Card, Avatar, Tooltip, Spin } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const PostWrapper = Styled.div`
    padding: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Posts = ({ posts, loading }) => {
    if (loading) {
        return (
            <PostWrapper>
                <Spin size="large" />
            </PostWrapper>
        );
    }

    return (
        <PostWrapper>
            {posts.map(post => (
                <Link to={`/post/${post.slug}`}>
                    <Tooltip title="click to view this blog">
                        <Card
                            key={post.id}
                            style={{ marginBottom: 30, marginLeft: 60, width: 300 }}
                            cover={<img alt="example" src={post.featured_image} />}
                        >
                            <Meta
                                avatar={<Avatar src={post.featured_image_thumbnail} />}
                                title={post.title.rendered}
                                description={post.excerpt.rendered}
                            />
                        </Card>
                    </Tooltip>
                </Link>
            ))}
        </PostWrapper>
    );
};

export default Posts;
