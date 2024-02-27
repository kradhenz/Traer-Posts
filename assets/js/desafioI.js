// async function to get posts from the API
async function getPosts() {
    // try-catch to manage errors
    try {
        // Make a request to the API to fetch the posts
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json(); // Convert the response to JSON format
        showPosts(data); // call function to show posts in HTML
    } catch (e) {
        console.log(e) // error message
    }
}
// Function to display the posts in the HTML
function showPosts(posts) {
    let postData = document.getElementById("post-data"); // catch container element from HTML
    let ul = document.createElement("ul"); // declare type of tag to create in HTML

    posts.forEach(post => { // loop to create a new li and p element
        // to create titles
        let title = document.createElement("li"); // declare type of tag to create in HTML
        title.textContent = post.title; // add title to element
        ul.appendChild(title); // add title to ul element

        // to create body
        let body = document.createElement("p"); // declare type of tag to create in HTML
        body.textContent = post.body; // add body to element
        ul.appendChild(body); // add body to ul element
    });
    
    postData.innerHTML = ""; // clean container before adding new posts
    postData.appendChild(ul); // add posts list to the container
}

// Call function to get posts using event click from button by id
btn.addEventListener("click", getPosts);
