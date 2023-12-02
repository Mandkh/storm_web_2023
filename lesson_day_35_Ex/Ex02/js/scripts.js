async function getUsersProfiles() {
    try {
        const userProfiles = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(userProfiles)
        const posts = await userProfiles.json();
        const usersSlice = posts.slice(0, 3);
        console.log(usersSlice);
        displayData(usersSlice);
    } catch (error) {
        console.error('Error:');
    }
}
function displayData(posts) {
    const container = document.getElementById('users');
    container.innerHTML = posts.map(post => `<H2>${post.id}</h2><p>${post.name}</p>`);
    
}
// const usersSlice = getUsersProfiles.slice(0, 3);

getUsersProfiles();