async function getUserAndPosts() {
    try {
        const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/2");
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
    container.innerHTML = `<H2>${post.title}</h2><p>${post.body}</p>`;
}
getUserAndPosts();
