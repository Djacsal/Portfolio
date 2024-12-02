import resume from './resume.pdf'
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (  
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Привет, меня зовут<em> Винцент</em></strong><br />я frontend разработчих
                </h1>
                <div className="header__text">
                    <p>с огромным желанием к обучению и творчеству.</p>
                </div>
                <Link  to={resume} download="Resume" target="_blank" rel="noreferrer" className="btn">
                    Download resume
                </Link>
          </div>
      </header>
    );
}
 
export default Header;