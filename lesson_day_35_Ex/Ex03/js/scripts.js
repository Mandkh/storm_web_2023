async function getData() {
    try {
        const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(postResponse)
        const post = await postResponse.json();
        console.log(post);
        displayData(post);
    } catch (error) {
        console.error('Error:');
    }
}
function displayData(post) {
    const container = document.getElementById('post');
    container.innerHTML = `<H2>${post.id}</h2><p>${post.userId}</p>`;
}
function searchUser(keyword) {
    const filteredUsers = postResponse.filter(userId => user.title.includes(keyword));
    document.getElementById('searchResults').innerHTML = filteredUsers.map(user => `<p>${user.name}</p>`).join('');
}

// search consequence
document.getElementById('searchBox').addEventListener('input', (e) => searchUser(e.target.value));
getData();