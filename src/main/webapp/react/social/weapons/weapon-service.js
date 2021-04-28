// declare URL where server listens for HTTP requests
const WEAPON_URL = "http://localhost:8080/api/weapons"
const USER_URL = "http://localhost:8080/api/users"

// retrieve all weapons from the server
export const findAllWeapons = () => 
    fetch(WEAPON_URL)                        // send GET request to server
        .then(response => response.json())  // parse response from server

// retrieve a single weapon by their ID
export const findWeaponById = (id) => 
    fetch(`${WEAPON_URL}/${id}`)
        .then(response => response.json())

// delete a weapon by their ID
export const deleteWeapon = (id) => 
    fetch(`${WEAPON_URL}/${id}`, {
        method: "DELETE"
    })

// create a new weapon
// export const createWeapon = (weapon) =>
//     fetch(WEAPON_URL, {
//         method: 'POST',
//         body: JSON.stringify(weapon),
//         headers: {'content-type': 'application/json'}
//     })
//     .then(response => response.json())

// create a weapon
export const createWeaponForUser = (userId, weapon) =>
    fetch(`${USER_URL}/${userId}/weapons`, {
        method: 'POST',
        body: JSON.stringify(weapon),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// find weapons given a user
export const findWeaponForUser = (userId) =>
    fetch(`${USER_URL}/${userId}/weapons`)
        .then(response => response.json())

// find character given a weapon
export const findCharacterIdForWeapon = (weaponId) =>
    fetch(`${WEAPON_URL}/${weaponId}/characterId`)
        .then(response => response.json())

// update a weapon by their ID
export const updateWeapon = (id, weapon) =>
    fetch(`${WEAPON_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(weapon),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// export all functions as the API to this service
export default {
    findAllWeapons,
    findWeaponById,
    deleteWeapon,
    createWeaponForUser,
    findWeaponForUser,
    updateWeapon,
    findCharacterIdForWeapon
}
