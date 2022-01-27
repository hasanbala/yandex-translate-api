class UI {
  constructor() {
    this.outputImage = document.querySelector("#outputImage");
    this.outputLanguage = document.querySelector("#outputLanguage");
    this.outputWord = document.querySelector("#outputWord");
    this.languageList = document.querySelector("#language");
  }

  changeUI() {
    this.outputImage.src = `images/${this.languageList.value}.png`;
    this.outputLanguage.innerHTML =
      this.languageList.options[this.languageList.selectedIndex].textContent;
  }
  displayTranslate(word) {
    this.outputWord.textContent = word;
  }
}
