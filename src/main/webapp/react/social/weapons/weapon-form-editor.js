import weaponService from "./weapon-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM; // import useHistory

const WeaponFormEditor = () => {
    const {id, userId} = useParams() // parse id from url
    const history = useHistory()

    const [weapon, setWeapon] = useState({})
    
    useEffect(() => {
        if(id !== "new") { // only load weapon by ID if ID is not "new"
            findWeaponById(id)
        }
        console.log(userId)
        console.log("hello")
    }, []);

    // const createWeapon = (weapon) =>
    //     weaponService.createWeapon(weapon)
    //         .then(() => history.goBack())

    const findWeaponById = (id) =>
        weaponService.findWeaponById(id)
            .then(weapon => setWeapon(weapon))

    const deleteWeapon = (id) =>
        weaponService.deleteWeapon(id)
            .then(() => history.goBack())

    const updateWeapon = (id, newWeapon) =>
        weaponService.updateWeapon(id, newWeapon)
            .then(() => history.goBack())

    const createWeaponForUser = (userId, weapon) =>
        weaponService.createWeaponForUser(userId, weapon)
            .then(() => history.goBack())
    

    return (
        <div>
            <h2>Weapon Editor</h2>
            <label>Id</label>
            <input
                readOnly={true}
                value={userId}/><br></br>
            <label>Name</label>
            <input
                onChange={(e) =>
                    setWeapon(weapon =>
                        ({...weapon, name: e.target.value}))}
                value={weapon.name}/><br></br>

            <label>Type</label>
            <input
                onChange={(e) =>
                    setWeapon(weapon =>
                        ({...weapon, type: e.target.value}))}
                value={weapon.type}/><br></br>

            <label>Level</label>
            <input
                onChange={(e) =>
                    setWeapon(weapon =>
                        ({...weapon, level: e.target.value}))}
                value={weapon.level}/><br></br>

            <label>Attack</label>
            <input
                onChange={(e) =>
                    setWeapon(weapon =>
                        ({...weapon, attack: e.target.value}))}
                value={weapon.attack}/><br></br>

            <button
                onClick={() => {
                history.goBack()}}>
                Cancel
            </button>
            
            <button
                onClick={() => deleteWeapon(weapon.id)}>
                Delete
            </button>

            <button
                onClick={() => createWeaponForUser(userId, weapon)}>
                Create
            </button>

            <button
                onClick={() => updateWeapon(weapon.id, weapon)}>
                Save
            </button>

        </div>
    )
}

export default WeaponFormEditor