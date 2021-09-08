import lang from '../resource/lang.json';
import "./index.css";

let localLang = lang.en;
document.getElementsByTagName("title")[0].innerHTML = `${localLang.title} | ${localLang.by}`;
