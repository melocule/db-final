// declare URL where server listens for HTTP requests
const USERS_URL = "http://localhost:8080/api/users"

// retrieve all users from the server
export const findAllUsers = () => 
    fetch(USERS_URL)                        // send GET request to server
        .then(response => response.json())  // parse response from server

// retrieve a single user by their ID
export const findUserById = (id) => 
    fetch(`${USERS_URL}/${id}`)
        .then(response => response.json())

// TODO: delete a user by their ID
export const deleteUser = (id) => 
    fetch(`${USERS_URL}/${id}`, {
        method: "DELETE"
    })

// create a new user
export const createUser = (user) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// update a user by their ID
export const updateUser = (id, user) =>
    fetch(`${USERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// export all functions as the API to this service
export default {
    findAllUsers,
    findUserById,
    deleteUser,
    createUser,
    updateUser
}
