
const token = 'super-sofisticated-token';
const url = 'http://localhost:3001';
const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': token };

export function getAllPosts() {
    return (
        fetch(`${url}/posts`, { headers })
            .then(response => response.json())
            .catch(error => console.log(error))
    );
}

export function newPost(post) {
    return(
        fetch(
            `${url}/posts`, {
                method: 'POST',
                headers : headers,
                body: JSON.stringify(post)
            }
        ).then((res) => post)
        .catch(error => console.log(error))
    );
}

export function deletePost(post) {
    return(
        fetch(
            `${url}/posts/${post.id}`, {
                method: 'DELETE',
                headers: headers
            }
        ).then((res) => post)
        .catch(error => console.log(error))
    );
}
