function pyramid(num){
    for (var i = 0; i <= num ; i++){
        var linha = '';
        for (var j = 1; j<= (num - i); j++){
            linha += ' ';
        }
        for (var k = 0; k <= i; k++){
            linha += '*';
        }
        console.log(linha);
    }
}

function result2(){
    var num = document.getElementById("nbr").value;
    var value = pyramid(num);

}
