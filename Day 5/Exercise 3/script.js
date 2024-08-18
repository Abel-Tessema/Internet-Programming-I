function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

document.getElementById("first").innerHTML = "5 * 4 = " + multiply(5, 4);
document.getElementById("second").innerHTML = "5 / 4 = " + divide(5, 4);