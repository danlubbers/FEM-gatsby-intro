import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import usePosts from '../hooks/use-posts';
import Insta from '../components/insta';
import PostPreview from '../components/post-preview';

export default () => {
    const posts = usePosts();


    
    return (
        <>
        <Hero />
        <Layout>
            <h2>Read my Blog</h2>
            {posts.map(post => (
                <PostPreview key={post.slug} post={post}></PostPreview>
                // <pre>{JSON.stringify(post, null, 2)}</pre>
            ))}
            <Insta />
        </Layout>
        </>
);}
