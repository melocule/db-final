import userService from "./user-service"
import UserInLine from "./inline-user-editor"

const { useState, useEffect } = React;

const {Link, useHistory} = window.ReactRouterDOM;

const UserList = () => {

    const history = useHistory()

    const [users, setUsers] = useState([])
    useEffect(() => { // invokes findAllUsers method, populates users array with users from database
        findAllUsers()
    }, [])

    const findAllUsers = () =>
        userService.findAllUsers() // calls userService's findAllUsers method
            .then(users => setUsers(users))


    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(user => setUsers(users => (users.map(user => user.id === id ? newUser : user))))

    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(users => setUsers(users => users.filter(user => user.id !== id)))

    return(
        <div>
            <h2>Users</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                        <button onClick={() => history.push("/users/new")}>
                            Create User
                        </button>
                            {/* <input placeholder="User Title"
                                   title="Please enter a title for the course" className="form-control" value={user.email}
                                   onChange={(e) => setUser(newUser => ({...newUser, email: e.target.value}))}/> */}
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createCourse(newCourse)}></i>
                        </div>
                    </div>
                </li>
            {
                users.map(user =>
                    <li key={user.id} className="list-group-item">
                        <UserInLine key={user.id}
                            updateUser={updateUser}
                            deleteUser={deleteUser}
                            user={user}/>
                    </li>)
            }
            </ul>

        </div>

        // <div>
        //     <h2>User List</h2>
        //     <button onClick={() => history.push("/users/new")}>
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
        //                 {user.characters.map(character => 
        //                 <p key={character.id}>
        //                     {character.name},
        //                 </p>)} */}
        //               </Link>
        //           </li>)
        //     }
        //     </ul>
        // </div>
    )
}

export default UserList;