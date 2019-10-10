import React from 'react';
import Styled from 'styled-components';
import 'antd/dist/antd.css';
import { Card, Avatar, Modal, Button } from 'antd';
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
        return <h2>Loading...</h2>;
    }

    return (
        <PostWrapper>
            {posts.map(post => (
                <Card
                    key={post.id}
                    style={{ marginBottom: 30, marginLeft: 60, width: 300 }}
                    cover={<img alt="example" src={post.featured_image} />}
                    actions={[<Link to={`/post/${post.slug}`}>View This Post</Link>]}
                >
                    <Meta
                        avatar={<Avatar src={post.featured_image_thumbnail} />}
                        title={post.title.rendered}
                        description={post.excerpt.rendered}
                    />
                </Card>
            ))}
        </PostWrapper>
    );
};

export default Posts;
