import React, { posts, setPosts } from 'react';
import React, { searchTerm, setSearchTerm } from 'react';
import React from 'react';
function Ex03() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await response.json();

        }
    })
    const filteredPosts = posts.filter(post =>)
}