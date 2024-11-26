import './appHeader.scss';
<<<<<<< HEAD
import { Link, NavLink } from 'react-router-dom';
=======

>>>>>>> 80c569597 (-ajavascript_in_work)
const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
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
                    <li><NavLink 
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                        to="/comics">Comics</NavLink></li>
=======
                <a href="#!">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="#!">Characters</a></li>
                    /
                    <li><a href="#!">Comics</a></li>
>>>>>>> 80c569597 (-ajavascript_in_work)
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;