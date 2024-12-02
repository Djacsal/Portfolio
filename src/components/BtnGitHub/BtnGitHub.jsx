import './BtnGitHub.css';
import gitHubBlack from './img/gitHub-black.svg';

const BtnGitHub = ({link}) => {
    return ( 

        <a href={link} target='_blank' rel="noreferrer" className="btn-outline">
            <img src={gitHubBlack} alt="" />
            GitHub репозиторий
        </a>

     );
}
 
export default BtnGitHub;