import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode';
import './Navbar.css';

const activLink = 'nav-list__link nav-list__link--active';
const noActivLink = 'nav-list__link';

const Navbar = () => {
    return(
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to='/' className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>
                   
                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) =>isActive?  activLink: noActivLink}>
                                Главная   
                            </NavLink></li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive}) =>isActive?  activLink: noActivLink}>
                                Проекты
                            </NavLink></li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive}) =>isActive?  activLink: noActivLink}>
                                Контакты 
                            </NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;