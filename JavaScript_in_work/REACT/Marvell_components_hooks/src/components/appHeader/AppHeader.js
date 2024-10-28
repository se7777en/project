import './appHeader.scss';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link, NavLink } from 'react-router-dom';
=======

>>>>>>> 80c569597 (-ajavascript_in_work)
=======
import { Link, NavLink } from 'react-router-dom';
>>>>>>> 5b640d350 (-aMarvell_components_hook_router)
const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
<<<<<<< HEAD
<<<<<<< HEAD
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink end
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                        to="/">Characters</NavLink></li>
<<<<<<< HEAD
                    <li><NavLink 
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                        to="/comics">Comics</NavLink></li>
=======
                <a href="#!">
=======
                <Link to="/">
>>>>>>> 5b640d350 (-aMarvell_components_hook_router)
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
<<<<<<< HEAD
                    <li><a href="#!">Characters</a></li>
                    /
                    <li><a href="#!">Comics</a></li>
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
                    <li><NavLink end
                     style={({isActive}) => ({color: isActive ? '#9f0013': 'inherit'})} 
                     to="/">Characters</NavLink></li>
                    <li><NavLink end 
                    style={({isActive}) => ({color: isActive ? '#9f0013': 'inherit'})} 
                    to="/comics">Comics</NavLink></li>
>>>>>>> 5b640d350 (-aMarvell_components_hook_router)
=======
                    <li><NavLink end
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                        to="/comics">Comics</NavLink></li>
>>>>>>> 1e38af11c (-aMarvell_components_hook_router)
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;