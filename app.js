const translateBtn = document.querySelector(".btn-translate");
const input = document.querySelector(".txtarea");
const outputDiv = document.querySelector(".output");

translateBtn.addEventListener("click", clickHandler);

let urlAPI = "https://api.funtranslations.com/translate/minion.json";

let translatedtxt;

function clickHandler() {
    let urlFetch = urlAPI + "?text=" + encodeURIComponent(input.value);

    fetch(urlFetch)
        .then(response => response.json())
        .then(json => {
            translatedtxt = json;
            outputDiv.innerText = translatedtxt.contents.translated;
        })
        .catch(errorHandler);
}

function errorHandler(error) {

    if (translatedtxt.error.code == 429) {

        outputDiv.innerText = translatedtxt.error.message
        console.log(translatedtxt.error.message);
    } 
    
    else {

        outputDiv.innerHTML = error + "<br>" + "<br>" + "Error from server side: " + translatedtxt.error.message + "<br>" + "<br>" + "If you have entered a new line(pressed enter) in input area, please avoid doing that, it will give error.";


        console.log(error);
        console.log("Error from server side: " + translatedtxt.error.message);
        console.log("If you have entered a new line(pressed enter) in input area, please avoid doing that, it will give error.");
    }

}