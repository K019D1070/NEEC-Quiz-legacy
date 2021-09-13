import loading from "./loading";
import Language from "./language";

import "../resources/css/index.css";

loading.init();
const lang = new Language();

if("serviceWorker" in navigator){
  ///* 実装中
  navigator.serviceWorker.register("ServiceWorker.js").then((resolve)=>{
    console.log(resolve);
  }).catch((reject)=>{
    console.error(reject);
  });
  //*/
}else{
  alert("Service Worker機能をサポートしたブラウザでなら,オフラインでもこのアプリを利用できます。");
}