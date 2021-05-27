function factorial(num){
    if (num == 0){
        return 1;
    }
    else{
        return num * factorial(num - 1);
    }
}
function result(){
    var num = document.getElementById("number").value;
    var rest = factorial(num);
    document.getElementById("result").innerHTML="The factorial of the Number "+ num + " is: " + rest ;
}