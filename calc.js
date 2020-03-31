function age() {
    suaidade = document.getElementById('fname').value;

    result = "Sua idade é " + suaidade + " anos. " + "Logo você tem " + suaidade * 365 + " dias" + " e " + (suaidade * 365) * 24 + " horas " + ((suaidade * 365) * 24) * 60 + " minutos";

    document.getElementById('result').innerHTML = result;
}
