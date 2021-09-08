export default class image{
  imagen(path){
    let image = document.createElement("img");
    image.src=path;
    return image;
  }
}