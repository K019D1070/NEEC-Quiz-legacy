import Loading from "./Loading";
import Language from "./Language";

import "../resources/css/index.css";

Loading.init();
const lang = new Language();

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("ServiceWorker.js").then((resolve)=>{
    console.log(resolve);
  }).catch((reject)=>{
    console.error(reject);
  });
}else{
  alert("Service Worker機能をサポートしたブラウザでなら,オフラインでもこのアプリを利用できます。");
}