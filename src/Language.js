import lang from '../resources/data/lang.json';

export default class Language{
  languages = window.navigator.languages || [
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage
  ];
  locale = "en";
  localLang = lang.en;
  onCahnge = ()=>{};
  constructor(){
    document.getElementById("selectLang").addEventListener("change", ()=>{
      this.change(document.getElementById("selectLang").value);
    });
    this.languages.find(element => {
      if(Object.keys(lang).includes(element)){
        this.change(element);
        this.locale = element;
        return element;
      }
    });
  }
  change(l){
    this.localLang = lang[l];
    document.getElementById("selectLang").value = l;
    this.switch();
    this.onCahnge();
  }
  switch(){
    document.getElementsByTagName("title")[0].innerHTML = `${this.localLang.title} | ${this.localLang.by}`;
    document.getElementById("lang").textContent = this.localLang.lang;
  }
  setOnChange(f){
    this.onCahnge=f;
  }
  getLang(){
    return this.locale;
  }
}
