import React, { useState, useEffect } from 'react';

function Ex01() {
    const [post, setPost] = useState(null)
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
                const data = await response.json();
                setPost(data)
            } catch (error) {
                console.error('Error:');
            }
        }
        fetchPost();
    }, []);
    if (!post) return <div>Loading...</div>;
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Ex01;