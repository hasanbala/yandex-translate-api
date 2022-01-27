const xvalue = document.querySelector("#word");
const xlanguage = document.querySelector("#language");
const xform = document.querySelector("#translate-form");

const translate = new Translate(xvalue.value, xlanguage.value);
const ui = new UI();

class App {
  static eventListener() {
    xform.addEventListener("submit", this.translateWord);
    xlanguage.onchange = () => {
      ui.changeUI();
    };
  }

  // static translateWord(e) {
  //   translate.changeParameters(xvalue.value, xlanguage.value);
  //   translate.translateWord(function (err, response) {
  //     err ? console.log(err) : ui.displayTranslate(response);
  //   });
  //   e.preventDefault();
  // }
  static translateWord(e) {
    translate.changeParameters(xvalue.value, xlanguage.value);
    translate
      .translateWord()
      .then((response) => ui.displayTranslate(response))
      .catch((err) => console.log(err));
    e.preventDefault();
  }
}
App.eventListener();
