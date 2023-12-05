function equal(){
    let result = document.getElementById("outputinput");

    let expression = result.value;
    let answer = eval(expression);
    result.value = answer;

    
    
}