//function calculate the lifetime
function age() {
    suaidade = document.getElementById('fname').value;

    if (suaidade != '') {
        
        /*if the text field is not null*/
        
        //calculate the lifetime
        result = "Your age is " + suaidade + " years old. " + "So you have " + suaidade * 365 + " days and " + (suaidade * 365) * 24 + " hours " + ((suaidade * 365) * 24) * 60 + " minutes";
        
        //return to the visual interface
        document.getElementById('result').innerHTML = result;
    }
    else if(suaidade == ''){
        
        /*if the text field is null*/
        
        //ask to the user to insert your age in the text field
        document.getElementById('result').innerHTML = "enter your age in the text space above.";
    }
}
