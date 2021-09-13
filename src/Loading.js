import image from "./image";

import sik from '../resources/images/SIK.gif';

export default class Loading{
  onLoading = false
  img = null;
  imgSize = {
    height: 0,
    width: 0
  }
  constructor(imageTag){
    this.imgSize.height = imageTag.height;
    this.imgSize.width = imageTag.width;
    imageTag.style.position="absolute";
    this.img = document.body.appendChild(imageTag);
    this.loading();
    window.addEventListener("resize", ()=>{
      this.refresh();
    });
  }
  loading(){
    this.img.style.display = "inline-block";
    this.img.style.left = `${document.getElementsByTagName("main")[0].offsetLeft+ (document.getElementsByTagName("main")[0].clientWidth- this.imgSize.width)/ 2}px`;
    this.img.style.top = `${document.getElementsByTagName("main")[0].offsetTop+ (document.getElementsByTagName("main")[0].clientHeight- this.imgSize.height)/ 2}px`;
    this.onLoading = true;
  }
  finish(){
    this.img.style.display = "none";
  }
  refresh(){
    if(this.onLoading){
      this.loading();
    }else{
      this.finish();
    }
  }
  static async init(){
    let imageTag = await image.imagen(sik);
    let self = new Loading(imageTag);
    return self;
  }
}