import React, { posts, setPosts } from 'react';
import React, { searchTerm, setSearchTerm } from 'react';
import React from 'react';
function Ex03() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await response.json();
            setUsers(data);
        }

        fetchUsers();

    })
    const filteredPosts = posts.filter(post => post.title.includes(searchTerm) || post.body.includes(searchTerm));
    return (
        <div>
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search posts...' />
            <div>
                {filteredPosts.map(post => <p key={post.id}>{post.title}</p>)}
            </div>
        </div>
    );
}




export default Ex03;