function pyAdder(string) {
    if (string.toLowerCase().substr(0, 2) == "py")
        return string;
    return "Py" + string;
}

alert(pyAdder("thon"));
alert(pyAdder("PyCharm"));
alert(pyAdder("pyankie"));