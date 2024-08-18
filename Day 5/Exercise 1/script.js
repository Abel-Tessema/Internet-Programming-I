function heronsFormula(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

document.write("Area with sides 3, 4, and 5 = " + heronsFormula(3, 4, 5));
