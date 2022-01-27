class Translate {
  constructor(word, language) {
    this.apikey =
      "trnsl.1.1.20210627T061505Z.9c549566bc63463f.f452538ab3df03a24bfe93617ae40f6e326c45a1";
    this.word = word;
    this.language = language;
    // this.xhr = new XMLHttpRequest();
  }

  // translateWord(callback) {
  //   const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
  //   this.xhr.open("GET", endpoint);
  //   this.xhr.onload = () => {
  //     if (this.xhr.status === 200) {
  //       const json = JSON.parse(this.xhr.responseText);
  //       const text = json.text[0];
  //       callback(null, text);
  //     } else {
  //       callback("bir hata oluştu", null);
  //     }
  //   };
  //   this.xhr.send();
  // }

  async translateWord() {
    const endpoint =
      await `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    const response = await fetch(endpoint);
    const json = await response.json();
    const text = await json.text[0];
    return text;
  }

  changeParameters(newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
  }
}
