import './Footer.css';
import gitHub from './img/gitHub.svg';
import instagram from './img/instagram.svg';
import twitter from './img/twitter.svg';
import vk from './img/vk.svg';
import linkedIn from './img/linkedIn.svg';


const Footer = () => {
    return (  
        <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <ul className="social">
                      <li className="social__item"><a href="https://vk.com/djacsal228"><img src={vk} alt="Link" /></a></li>
                      <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                      <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                      <li className="social__item"><a href="https://github.com/Djacsal"><img src={gitHub} alt="Link" /></a></li>
                      <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                  </ul>
                  <div className="copyright">
                      <p>© 2024 frontend-dev.com</p>
                  </div>
              </div>
          </div>
      </footer>
    );
}
 
export default Footer;