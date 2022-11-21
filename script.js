let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {

};

function übunghinuzfügen() {
    dictionary[Frage.value] = input2.value;

    Frage.value = "";
    input2.value = "";

    localStorage.setItem('fragenundantworten', JSON.stringify(dictionary));
}

function render() {
    for (let key in dictionary) {
        Übungsliste.innerHTML += `<h1></h1> <li>${key} &nbsp; <b id="Abtrennung">L ö s u n g 💡:</b> &nbsp; ${dictionary[key]}</li>`;
    }
}

function löschen() {
    localStorage.clear();
}