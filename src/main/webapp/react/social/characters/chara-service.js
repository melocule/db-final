// declare URL where server listens for HTTP requests
const CHARA_URL = "http://localhost:8080/api/characters"
const USER_URL = "http://localhost:8080/api/users"

// retrieve all characters from the server
export const findAllCharacters = () => 
    fetch(CHARA_URL)                        // send GET request to server
        .then(response => response.json())  // parse response from server

// retrieve a single character by their ID
export const findCharaById = (id) => 
    fetch(`${CHARA_URL}/${id}`)
        .then(response => response.json())

// delete a character by their ID
export const deleteCharacter = (id) => 
    fetch(`${CHARA_URL}/${id}`, {
        method: "DELETE"
    })

// create a new character
// export const createCharacter = (character) =>
//     fetch(CHARA_URL, {
//         method: 'POST',
//         body: JSON.stringify(character),
//         headers: {'content-type': 'application/json'}
//     })
//     .then(response => response.json())

// create a character
export const createCharacterForUser = (userId, character) =>
    fetch(`${USER_URL}/${userId}/characters`, {
        method: 'POST',
        body: JSON.stringify(character),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// find characters given a user
export const findCharacterForUser = (userId) =>
    fetch(`${USER_URL}/${userId}/characters`)
        .then(response => response.json())

// find weapon given character
export const findWeaponIdForChara = (charaId) =>
    fetch(`characters/${charaId}/weaponId`)
    .then(response => response.json())

// update a character by their ID
export const updateCharacter = (id, character) =>
    fetch(`${CHARA_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(character),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// export all functions as the API to this service
export default {
    findAllCharacters,
    findCharaById,
    deleteCharacter,
    createCharacterForUser,
    findCharacterForUser,
    updateCharacter,
    findWeaponIdForChara
}
