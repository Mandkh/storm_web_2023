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
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
    },
]

// 1-3 hadgalah
const usersSlice = users.slice(0, 3);
// creating ul element
const userElement = document.createElement('ul');
// creating li element
usersSlice.forEach(user => {
    const li = document.createElement('li'); t
    li.textContent = user.name;
    userElement.appendChild(li);
});
// ...
document.body.appendChild(userElement);