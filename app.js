var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler() {
    // outputDiv.innerText = "xyz  " + txtInput.value;

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response=> response.json())
    .then(json=> console.log(json.contents.translation))


};

btnTranslate.addEventListener("click", clickHandler)