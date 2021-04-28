import charaService from "./chara-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM; // import useHistory

const CharaFormEditor = () => {
    const {id, userId} = useParams() // parse id from url
    const history = useHistory()

    const [chara, setChara] = useState({})
    
    useEffect(() => {
        if(id !== "new") { // only load chara by ID if ID is not "new"
            findCharaById(id)
        }
        // console.log(id)
        // console.log(userId)
        // console.log(this.props.location)
        // console.log("hello")
    }, []);

    // const createCharacter = (chara) =>
    //     charaService.createCharacter(chara)
    //         .then(() => history.goBack())

    const findCharaById = (id) =>
        charaService.findCharaById(id)
            .then(chara => setChara(chara))

    const deleteCharacter = (id) =>
        charaService.deleteCharacter(id)
            .then(() => history.goBack())

    const updateCharacter = (id, newChara) =>
        charaService.updateCharacter(id, newChara)
            .then(() => history.goBack())

    const createCharacterForUser = (userId, chara) =>
        charaService.createCharacterForUser(userId, chara)
            .then(() => history.goBack())
    

    return (
        <div>
            <h2>Character Editor</h2>
            <label>Id</label>
            <input
                readOnly={true}
                value={chara.id}/><br></br>
            <label>Name</label>
            <input
                onChange={(e) =>
                    setChara(chara =>
                        ({...chara, name: e.target.value}))}
                value={chara.name}/><br></br>

            <label>Element</label>
            <input
                onChange={(e) =>
                    setChara(chara =>
                        ({...chara, element: e.target.value}))}
                value={chara.element}/><br></br>

            <label>Level</label>
            <input
                onChange={(e) =>
                    setChara(chara =>
                        ({...chara, level: e.target.value}))}
                value={chara.level}/><br></br>

            <label>Hp</label>
            <input
                onChange={(e) =>
                    setChara(chara =>
                        ({...chara, hp: e.target.value}))}
                value={chara.hp}/><br></br>

            <label>Attack</label>
            <input
                onChange={(e) =>
                    setChara(chara =>
                        ({...chara, attack: e.target.value}))}
                value={chara.attack}/><br></br>

            <label>Defense</label>
            <input
                onChange={(e) =>
                    setChara(chara =>
                        ({...chara, def: e.target.value}))}
                value={chara.def}/><br></br>

            <button
                onClick={() => {
                history.goBack()}}>
                Cancel
            </button>
            
            <button
                onClick={() => deleteCharacter(chara.id)}>
                Delete
            </button>

            <button
                onClick={() => createCharacterForUser(userId, chara)}>
                Create
            </button>

            <button
                onClick={() => updateCharacter(chara.id, chara)}>
                Save
            </button>

        </div>
    )
}

export default CharaFormEditor