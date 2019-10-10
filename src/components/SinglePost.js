import React, { Component } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Header from './header';
import Footer from './footer';

const SinglePostWrapper = Styled.div`
    .image {
        width: 500px;
        height: 500px;
        padding-top: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100px;
    }
    h1 {
        text-align: center;
    }
    h3 {
        width: 70%;
        display: block;
        margin-left: auto;
        margin-right: auto; 
    }
`;

class SinglePage extends Component {
    constructor() {
        super();
        this.state = {
            post: [],
        };
    }
    componentDidMount() {
        const { params } = this.props.match;
        axios.get(`https://epower.ng/wp-json/wp/v2/posts?slug=${params.slug}`).then(response => {
            this.setState({ post: response.data });
        });
    }
    render() {
        return (
            <SinglePostWrapper>
                <Header />
                {this.state.post.map(single => {
                    return (
                        <div key={single.id}>
                            <img className="image" alt="image" src={single.featured_image} />
                            <h1>{single.title.rendered}</h1>
                            <h3>
                                {single.excerpt.rendered}
                                {single.excerpt.rendered}
                                {single.excerpt.rendered}
                                {single.excerpt.rendered}
                                {single.excerpt.rendered}
                                {single.excerpt.rendered}
                                {single.excerpt.rendered}
                                {single.excerpt.rendered}
                            </h3>
                        </div>
                    );
                })}
                <Footer />
            </SinglePostWrapper>
        );
    }
}

export default SinglePage;
