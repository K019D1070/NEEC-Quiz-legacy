export default class{
  static imagen(path){
    let image = new Image();
    image.src=path;
    return new Promise((loaded, reject)=>{
      image.addEventListener("load", ()=>{
        loaded(image);
      })
    });
  }
}