import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";

import CharaList from "./characters/chara-list";
import CharaFormEditor from "./characters/chara-form-editor";
import WeaponList from "./weapons/weapon-list";
import WeaponFormEditor from "./weapons/weapon-form-editor";


const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                    <Route path={["/users", "/"]} exact={true}>
                        <UserList/>
                    </Route>
                    <Route path="/users/:id" exact={true}>
                        <UserFormEditor/>
                    </Route>
                    <Route path={["/users/:userId/characters"]} exact={true}>
                        <CharaList/>
                    </Route>
                    <Route path={["/users/:userId/characters/:id"]} exact={true}>
                        <CharaFormEditor/>
                    </Route>
                    <Route path={["/users/:userId/weapons"]} exact={true}>
                        <WeaponList/>
                    </Route>
                    <Route path={["/users/:userId/weapons/:id"]} exact={true}>
                        <WeaponFormEditor/>
                    </Route>
            </HashRouter>
        </div>
    );
}

export default App;
