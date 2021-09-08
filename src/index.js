import loading from "./loading";

import favicon from '../resources/images/favicon.ico';
import lang from '../resources/data/lang.json';
import "../resources/css/index.css";

loading.init();
let localLang = lang.en;
document.getElementsByTagName("title")[0].innerHTML = `${localLang.title} | ${localLang.by}`;
if("serviceWorker" in navigator){
  /* 実装中
  navigator.serviceWorker.register("ServiceWorker.js");
  */
}else{
  alert("Service Worker機能をサポートしたブラウザでなら,オフラインでもこのアプリを利用できます。");
}