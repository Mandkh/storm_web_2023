const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
    },
    {
        id: 3,
        name: 'Clementine Baunch',
        username: 'Samantha',
    },
]
// function to search users
function searchUser(keyword) {
    const filteredUsers = users.filter(user => user.name.includes(keyword));
    document.getElementById('searchResults').innerHTML = filteredUsers.map(user => `<p>${user.name}</p>`).join('');
}

// search consequence
document.getElementById('searchBox').addEventListener('input', (e) => searchUser(e.target.value));