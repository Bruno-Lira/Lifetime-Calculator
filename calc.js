function age() {
    suaidade = document.getElementById('fname').value;

    result = "Your age is " + suaidade + " years old. " + "So you have " + suaidade * 365 + " days and " + (suaidade * 365) * 24 + " hours " + ((suaidade * 365) * 24) * 60 + " minutes";

    document.getElementById('result').innerHTML = result;
}
