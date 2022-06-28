import Img from "./assets/mv5bmdvjymmynzytzmm4ys00ywvllthky2itmjhimgm1ntmyywexxkeyxkfqcgdeqxvynti5njiymwatat-v1-sx1777-cr0-0-1777-999-al-1572019087.jpg";
import "./generateJoke";
import generateJoke from "./generateJoke";
import "./styles/main.scss";

const imgTag = document.getElementById("portrait");
imgTag.src = Img;

generateJoke();

const button = document.getElementById("button");
button.addEventListener("click", generateJoke);
