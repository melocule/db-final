import weaponService from "./weapon-service";

const {useState, useEffect} = React;
const {Link, useParams} = window.ReactRouterDOM;

const InlineWeaponEditor = ({weapon, deleteWeapon, updateWeapon}) => {
    const [weaponCopy, setWeaponCopy] = useState(weapon)
    const [chara, setChara] = useState({})
    const [editing, setEditing] = useState(false)

    const {userId} = useParams()

    useEffect(() => { // invokes findAllCharacters method, populates charas array with charas from database
        findCharacterIdForWeapon()
    }, [])

    const findCharacterIdForWeapon = () =>
        weaponService.findCharacterIdForWeapon(weaponCopy.id) // calls charaService's findCharacterForUser method
            .then(chara => setChara(chara))

    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={weaponCopy.name}
                            onChange={(e)=>setWeaponCopy(weaponCopy => ({...weaponCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={weaponCopy.element}
                            onChange={(e)=>setWeaponCopy(weaponCopy => ({...weaponCopy, element: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={weaponCopy.level}
                            onChange={(e)=>setWeaponCopy(weaponCopy => ({...weaponCopy, level: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={weaponCopy.hp}
                            onChange={(e)=>setWeaponCopy(weaponCopy => ({...weaponCopy, hp: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={weaponCopy.attack}
                            onChange={(e)=>setWeaponCopy(weaponCopy => ({...weaponCopy, attack: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={weaponCopy.def}
                            onChange={(e)=>setWeaponCopy(weaponCopy => ({...weaponCopy, def: e.target.value}))}/>
                    </div>
                   
                    <div className="col-1">
                        <Link to={`/users/${userId}`}>
                            User
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/users/${userId}/characters/${chara.id}`}>
                           Character
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateWeapon(weaponCopy.id, weaponCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteWeapon(weapon.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/weapons/${weaponCopy.id}`}>
                            {weaponCopy.id}
                        </Link>
                    </div>

                    <div className="col">
                        <Link to={`/weapons/${weaponCopy.id}`}>
                            {weaponCopy.name}
                        </Link>
                    </div>

                    <div className="col">
                        <Link to={`/weapons/${weaponCopy.id}`}>
                            {weaponCopy.element}
                        </Link>
                    </div>
                    
                    <div className="col">
                        <Link to={`/weapons/${weaponCopy.id}`}>
                            {weaponCopy.level}
                        </Link>
                    </div>

                    <div className="col">
                        <Link to={`/weapons/${weaponCopy.id}`}>
                            {weaponCopy.hp}
                        </Link>
                    </div>
                    
                    <div className="col">
                        <Link to={`/weapons/${weaponCopy.id}`}>
                            {weaponCopy.attack}
                        </Link>
                    </div>
                    
                    <div className="col">
                        <Link to={`/weapons/${weaponCopy.id}`}>
                            {weaponCopy.def}
                        </Link>
                    </div>
                    
                    
                    <div className="col-1">
                        <Link to={`/users/${userId}`}>
                            User
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/users/${userId}/characters/${chara.id}`}>
                            Character
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineWeaponEditor;