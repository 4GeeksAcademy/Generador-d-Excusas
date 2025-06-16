window.onload = function () {
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car', 'my job'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function selector(who,action,what,when) {
    let excusaNueva = ""
    let random = Math.floor(Math.random()*4);
    excusaNueva += (who[random] + " ")
    random = Math.floor(Math.random()*4);
    excusaNueva += (action[random] + " ")
    random = Math.floor(Math.random()*4);
    excusaNueva += (what[random] + " ")
    random = Math.floor(Math.random()*4);
    excusaNueva += (when[random] + " ")
    return excusaNueva
}
let excusa = selector(who,action,what,when)
let parrafoHtml = document.getElementById("excuse");
parrafoHtml.innerHTML = excusa
}