import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './posts';

const App = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState({});
    const [currentPage, setCurrentPage] = useState({});
    const [postsPerPage, setPostsPerPage] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get('https://epower.ng/wp-json/wp/v2/posts');
            setPosts(res.data);
            setLoading(false);
        };

        fetchPost();
    }, []);

    return (
        <div className="App">
            <h1>My Blog</h1>
            <Posts posts={posts} loading={loading} />
        </div>
    );
};

export default App;
