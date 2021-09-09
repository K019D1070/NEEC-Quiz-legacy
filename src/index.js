import loading from "./loading";

import lang from '../resources/data/lang.json';
import "../resources/css/index.css";

loading.init();
const languages = window.navigator.languages || [
  window.navigator.language ||
  window.navigator.userLanguage ||
  window.navigator.browserLanguage
];

let localLang = lang.en;
languages.find(element => {
  if(Object.keys(lang).includes(element)){
    localLang = lang[element];
    return element;
  }
});
document.getElementsByTagName("title")[0].innerHTML = `${localLang.title} | ${localLang.by}`;

if("serviceWorker" in navigator){
  /* 実装中
  navigator.serviceWorker.register("ServiceWorker.js");
  */
}else{
  alert("Service Worker機能をサポートしたブラウザでなら,オフラインでもこのアプリを利用できます。");
}