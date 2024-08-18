function fiftyChecker(a, b) {
    if (a + b == 50 && (a == 50 || b == 50))
        return "Their sum is 50, and one of the numbers is 50.";
    if (a + b == 50)
        return "Their sum is 50.";
    else if (a == 50 || b == 50)
        return "One of the numbers is 50.";
    else
        return "They are not 50, and neither is their sum.";
}

document.getElementById("first").innerText = "Numbers 20 and 30: " + fiftyChecker(20, 30);
document.getElementById("second").innerText = "Numbers 0 and 50: " + fiftyChecker(0, 50);
document.getElementById("third").innerText = "Numbers 20 and 20: " + fiftyChecker(20, 20);