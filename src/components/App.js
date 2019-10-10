import React, { useState, useEffect } from 'react';
import Posts from './posts';
import axios from 'axios';
import Pagination from './Pagination';
import Header from './header';
import Footer from './footer';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://epower.ng/wp-json/wp/v2/posts');
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div>
            <Header />
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            <Footer />
        </div>
    );
};

export default App;
