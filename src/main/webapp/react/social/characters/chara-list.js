import CharaFormEditor from "./chara-form-editor";
import charaService from "./chara-service"
import CharaInLine from "./inline-chara-editor"

const { useState, useEffect } = React;

const {Link, useParams, useHistory} = window.ReactRouterDOM;

const CharaList = () => {

    const history = useHistory()

    const [charas, setCharas] = useState([])
    const [newChara, setNewChara] = useState({})
    const {userId} = useParams()

    useEffect(() => { // invokes findAllCharacters method, populates charas array with charas from database
        findCharacterForUser(userId)
    }, [])

    // const findAllCharacters = () =>
    //     charaService.findAllCharacters() // calls charaService's findAllUsers method
    //         .then(charas => setCharas(charas))

    const createCharacterForUser = (userId, chara) =>
        charaService.createCharacterForUser(userId, chara)
            .then(chara => {
                setCharas(charas => ([...charas, chara]))
            })

    const findCharacterForUser = (userId) =>
        charaService.findCharacterForUser(userId) // calls charaService's findCharacterForUser method
            .then(charas => setCharas(charas))


    const updateCharacter = (id, newChara) =>
        charaService.updateCharacter(id, newChara)
            .then(chara => setCharas(charas => (charas.map(chara => chara.id === id ? newChara : chara))))

    const deleteCharacter = (id) =>
        charaService.deleteCharacter(id)
            .then(charas => setCharas(charas => charas.filter(chara => chara.id !== id)))
    
    

    return(
        <div>
            <h2>Characters</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            
                         <button onClick={() => history.push(`characters/new`)}>
                            Create Character
                        </button>
                        </div>
                    </div>
                </li>
            {
                charas.map(chara =>
                    <li key={chara.id} className="list-group-item">
                        <CharaInLine key={chara.id}
                            updateCharacter={updateCharacter}
                            deleteCharacter={deleteCharacter}
                            chara={chara}/>
                    </li>)
            }
            </ul>
            

        </div>

        // <div>
        //     <h2>User List</h2>
        //     <button onClick={() => history.push("/charas/new")}>
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

export default CharaList;