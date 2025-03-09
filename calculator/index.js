const bar = document.getElementById("calculator-bar-id");
console.log(bar);
let reset = false;

function calculator(num) {
    if (bar.innerText == "klikněte na tlačítka" || reset) {
        bar.innerText = num;
        reset = false;
    } else {
        bar.innerText += num;
    }
}

function výsledek() {
    try {
        bar.innerText = eval(bar.innerText);
        reset = true;
    } catch {
        bar.innerText = "chyba";
        reset = true;
    }
}