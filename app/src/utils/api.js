
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

export function getPost(postId) {
    return (
        fetch(
            `${url}/posts/${postId}`, {
                method: 'GET',
                headers : headers
            }
        ).then(res => res.json())
        .catch(error => console.log(error))
    )
}

export function getComments(postId) {
    return(
        fetch(
            `${url}/posts/${postId}/comments`, {
                method: 'GET',
                headers : headers
            }
        ).then(res => res.json())
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
        ).then(res => post)
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
        ).then(res => post)
        .catch(error => console.log(error))
    );
}

export function editPost(post) {
    const editedPost = { title: post.title, body: post.body };
    return(
        fetch(
            `${url}/posts/${post.id}`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(editedPost)
            }
        ).then(res => post)
        .catch(error => console.log(error))
    );
}

export function vote(vote, post) {
    const postVote = { option: vote };
    return(
        fetch(
            `${url}/posts/${post.id}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(postVote)
            }
        ).then(res => {
            return {vote, post}
        })
        .catch(error => console.log(error))
    );
}

export function newComment(comment) {
    return(
        fetch(
            `${url}/comments`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(comment)
            }
        ).then(res => comment)
        .catch(error => console.log(error))
    );
}

export function editComment(comment) {
    comment.timestamp = Date.now()
    const newComment = { timestamp: comment.timestamp, body: comment.body };
    return(
        fetch(
            `${url}/comments/${comment.id}`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(newComment)
            }
        ).then(res => comment)
        .catch(error => console.log(error))
    );
}