import React from 'react';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>loading...</h2>;
    }
    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title.rendered}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
