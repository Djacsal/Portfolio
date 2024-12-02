import budss from "./../components/Project/img/Budss.jpg";
import budssBig from "./../components/Project/img/Budss-big.jpg";
import calculator from "./../components/Project/img/Calculator.jpg";
import calculatorBig from "./../components/Project/img/Calculator-big.jpg";
import passwordManager from "./../components/Project/img/Password-manager.jpg";
import passwordManagerBig from "./../components/Project/img/Password-manager-big.jpg";
import QRCode from "./../components/Project/img/QR-code.jpg";
import QRCodeBig from "./../components/Project/img/QR-code-big.jpg";
import photorecipe from "./../components/Project/img/Photorecipe.jpg";
import photorecipeBig from "./../components/Project/img/Photorecipe-big.jpg";
import weatherApp from "./../components/Project/img/Weather-app.jpg";
import weatherAppBig from "./../components/Project/img/Weather-app-big.jpg";

const projects = [
  {
    key: 1,
    title: "QR-кодер",
    skills: "HTML CSS JS",
    img: QRCode,
    imgBig: QRCodeBig,
    gitHubLink: "https://github.com/Djacsal/JS-projects/tree/main/QR%20Coder",
  },
  {
    key: 2,
    title: "Калькулятор",
    skills: "HTML CSS JS",
    img: calculator,
    imgBig: calculatorBig,
    gitHubLink: "https://github.com/Djacsal/JS-projects/tree/main/Calculator",
  },
  {
    key: 3,
    title: "Приложение о погоде",
    skills: "HTML CSS JS",
    img: weatherApp,
    imgBig: weatherAppBig,
    gitHubLink: "https://github.com/Djacsal/JS-projects/tree/main/Weather%20app",
  },
  {
    key: 4,
    title: "Лендинг",
    skills: "REACT SCSS",
    img: budss,
    imgBig: budssBig,
    gitHubLink: "https://github.com/Djacsal/Budss",
  },
  {
    key: 5,
    title: "Кулинарная книга",
    skills: "HTML CSS JS PHP MYSQL",
    img: photorecipe,
    imgBig: photorecipeBig,
    gitHubLink: "https://github.com/Djacsal/Cookbook",
  },
  {
    key: 6,
    title: "Менеджер паролей",
    skills: "REACT ELECTRON NODE.JS",
    img: passwordManager,
    imgBig: passwordManagerBig,
    gitHubLink: "https://github.com/Djacsal/password-manager-generator",
  },
];

export { projects };
