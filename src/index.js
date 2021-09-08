import image from "./image";
import loading from "./loading";

import lang from '../resources/data/lang.json';
import "../resources/css/index.css";


let localLang = lang.en;
document.getElementsByTagName("title")[0].innerHTML = `${localLang.title} | ${localLang.by}`;

