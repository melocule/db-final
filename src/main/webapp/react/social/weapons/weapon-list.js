import WeaponFormEditor from "./weapon-form-editor";
import weaponService from "./weapon-service"
import WeaponInLine from "./inline-weapon-editor"

const { useState, useEffect } = React;

const {Link, useParams, useHistory} = window.ReactRouterDOM;

const WeaponList = () => {

    const history = useHistory()

    const [weapons, setWeapons] = useState([])
    const [newWeapon, setNewWeapon] = useState({})
    const {userId} = useParams()

    useEffect(() => { // invokes findAllWeapons method, populates weapons array with weapons from database
        findWeaponForUser(userId)
    }, [])

    // const findAllWeapons = () =>
    //     weaponService.findAllWeapons() // calls weaponService's findAllUsers method
    //         .then(weapons => setWeapons(weapons))

    const createWeaponForUser = (userId, weapon) =>
        weaponService.createWeaponForUser(userId, weapon)
            .then(weapon => {
                setWeapons(weapons => ([...weapons, weapon]))
            })

    const findWeaponForUser = (userId) =>
        weaponService.findWeaponForUser(userId) // calls weaponService's findWeaponForUser method
            .then(weapons => setWeapons(weapons))

    const updateWeapon = (id, newWeapon) =>
        weaponService.updateWeapon(id, newWeapon)
            .then(weapon => setWeapons(weapons => (weapons.map(weapon => weapon.id === id ? newWeapon : weapon))))

    const deleteWeapon = (id) =>
        weaponService.deleteWeapon(id)
            .then(weapons => setWeapons(weapons => weapons.filter(weapon => weapon.id !== id)))
    
    

    return(
        <div>
            <h2>Weapons</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="row">
                  <div className="col">

                    <button onClick={() => history.push(`new`)}>
                      Create Weapon
                    </button>
                  </div>
                </div>
              </li>
            {
                weapons.map(weapon =>
                    <li key={weapon.id} className="list-group-item">
                        <WeaponInLine key={weapon.id}
                            updateWeapon={updateWeapon}
                            deleteWeapon={deleteWeapon}
                            weapon={weapon}/>
                    </li>)
            }
            </ul>
            

        </div>

        // <div>
        //     <h2>User List</h2>
        //     <button onClick={() => history.push("/weapons/new")}>
        //         Add User
        //     </button>
        
        //     <ul className="list-group-item">

        //     {
        //        users.map(user =>
        //           <li key={user.id}>
        //               <Link to={`/users/${user.id}`}>
        //                 {user.email}
        //                 {/* {user.firstName},
        //                 {user.lastName},
        //                 {user.username},
        //                 {user.dateOfBirth},
        //                 {user.weapons.map(weapon => 
        //                 <p key={weapon.id}>
        //                     {weapon.name},
        //                 </p>)}
        //                 {user.weapons.map(weapon => 
        //                 <p key={weapon.id}>
        //                     {weapon.name},
        //                 </p>)} */}
        //               </Link>
        //           </li>)
        //     }
        //     </ul>
        // </div>
    )
}

export default WeaponList;