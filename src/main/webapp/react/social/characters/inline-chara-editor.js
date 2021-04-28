import charaService from "./chara-service";

const {useState, useEffect} = React;
const {Link} = window.ReactRouterDOM;

const InlineCharaEditor = ({chara, deleteCharacter, updateCharacter}) => {
    const [charaCopy, setCharaCopy] = useState(chara)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={charaCopy.name}
                            onChange={(e)=>setCharaCopy(charaCopy => ({...charaCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={charaCopy.element}
                            onChange={(e)=>setCharaCopy(charaCopy => ({...charaCopy, element: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={charaCopy.level}
                            onChange={(e)=>setCharaCopy(charaCopy => ({...charaCopy, level: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={charaCopy.hp}
                            onChange={(e)=>setCharaCopy(charaCopy => ({...charaCopy, hp: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={charaCopy.attack}
                            onChange={(e)=>setCharaCopy(charaCopy => ({...charaCopy, attack: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={charaCopy.def}
                            onChange={(e)=>setCharaCopy(charaCopy => ({...charaCopy, def: e.target.value}))}/>
                    </div>
                   
                    <div className="col-1">
                        <Link to={`/users/${charaCopy.user.id}`}>
                            User
                        </Link>
                    </div>
                    <div className="col-1">
                        {/*<Link to={`/users/${charaCopy.user.id}/weapons/${charaCopy.findWeaponIdForChara(charaCopy.id)}`}>*/}
                        {/*    Weapon*/}
                        {/*</Link>*/}
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateCharacter(charaCopy.id, charaCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteCharacter(chara.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/characters/${charaCopy.id}`}>
                            {charaCopy.id}
                        </Link>
                    </div>

                    <div className="col">
                        <Link to={`/characters/${charaCopy.id}`}>
                            {charaCopy.name}
                        </Link>
                    </div>

                    <div className="col">
                        <Link to={`/characters/${charaCopy.id}`}>
                            {charaCopy.element}
                        </Link>
                    </div>
                    
                    <div className="col">
                        <Link to={`/characters/${charaCopy.id}`}>
                            {charaCopy.level}
                        </Link>
                    </div>

                    <div className="col">
                        <Link to={`/characters/${charaCopy.id}`}>
                            {charaCopy.hp}
                        </Link>
                    </div>
                    
                    <div className="col">
                        <Link to={`/characters/${charaCopy.id}`}>
                            {charaCopy.attack}
                        </Link>
                    </div>
                    
                    <div className="col">
                        <Link to={`/characters/${charaCopy.id}`}>
                            {charaCopy.def}
                        </Link>
                    </div>
                    
                    
                    <div className="col-1">
                        <Link to={`/users/${charaCopy.user.id}`}>
                            User
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/users/${charaCopy.user.id}/weapons/${charaService.findWeaponIdForChara(charaCopy.id)}`}>
                            Weapon
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
};

export default InlineCharaEditor;