import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import postPreview from '../components/post-preview';
import PostPreview from '../components/post-preview';

export default () => {
    const posts = usePosts();


    
    return (
        <Layout>
            <h1>Home</h1>
            <p>Hello Dan!</p>
            <Link to="/about/">Learn about me &rarr;</Link>

            <h2>Read my Blog</h2>
            {posts.map(post => (
                <PostPreview key={post.slug} post={post}></PostPreview>
                // <pre>{JSON.stringify(post, null, 2)}</pre>
            ))}
        </Layout>
);}
