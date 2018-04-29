const token = 'super-sofisticated-token';

export const getAllPosts = () =>
    fetch(`http://localhost:3001/posts`,
            { headers: { 'Authorization' : token }})
            .then(res => res.json());

export const getPostByCategory = (category) => {
    switch(category) {
        case 'udacity':
            return fetch(`http://localhost:3001/udacity/posts`,
                 { headers: { 'Authorization': token }})
                 .then(res => res.json());
        case 'react':
            return fetch(`http://localhost:3001/react/posts`,
                        { headers: { 'Authorization': token }})
                        .then((res) => res.json());
        case 'redux':
            return fetch(`http://localhost:3001/redux/posts`,
                        { headers: { 'Authorization': token }})
                        .then((res) => res.json());
        case 'node':
            return fetch(`http://localhost:3001/udacity/posts`,
                        { headers: { 'Authorization': token }})
                        .then((res) => res.json());
        default:
            return
    }
}
