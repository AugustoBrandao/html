// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', clickHref);
INPUT_CHECKBOX.addEventListener('click', clickCheckbox);

INPUT_TEXT.addEventListener('click', (event) => {
    const character = event.key;
    if (character !== 'a') {
        event.preventDefault();
    }
});

function clickHref(event){
    //Quando clicar no link, nada deve acontecer
    event.preventDefault(); //Evitar o comportamento padrão do elemento
}

function clickCheckbox(event){
     //Quando clicar no checkbox, nada deve acontecer
     event.preventDefault(); //Evitar o comportamento padrão do elemento
}


//somente o caractere a (letra ‘a’ minúscula) possa ser digitado na caixinha.
