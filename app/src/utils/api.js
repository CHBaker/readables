import { postsFetchedSuccess } from "../actions";

const token = 'super-sofisticated-token';
const url = 'http://localhost:3001';
const headers = { 'Accept': 'application/json', 'Authorization': token };

export function getAllPosts() {
    return fetch(`${url}/posts`, { headers })
        .then((response) => {
            if (!response.ok) {
                console.log(response);
            }
            console.log(response)
            return response;
        })
        .then((response) => response.json())
        .then((posts) => dispatch(postsFetchedSuccess(posts)))
        .catch((error) => console.log(error));
}

// export const getPostsByCategory = (category) => {
//     switch(category) {
//         case 'udacity':
//             return fetch(`http://localhost:3001/udacity/posts`,
//                  { headers: { 'Authorization': token }})
//                  .then(res => res.json());
//         case 'react':
//             return fetch(`http://localhost:3001/react/posts`,
//                         { headers: { 'Authorization': token }})
//                         .then((res) => res.json());
//         case 'redux':
//             return fetch(`http://localhost:3001/redux/posts`,
//                         { headers: { 'Authorization': token }})
//                         .then((res) => res.json());
//         case 'node':
//             return fetch(`http://localhost:3001/udacity/posts`,
//                         { headers: { 'Authorization': token }})
//                         .then((res) => res.json());
//         default:
//             return
//     }
// }
