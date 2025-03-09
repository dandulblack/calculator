const bar = document.getElementById("calculator-bar-id");
console.log(bar);

function calculator(num) {
    if (bar.innerText == "klikněte na tlačítka") {
        bar.innerText = num;
    } else {
        bar.innerText += num;
    }
}