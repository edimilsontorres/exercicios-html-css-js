function calc(){

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    let media = (nota1 + nota2)/2

    let res = ""

    if (media >=7){
        res = "Aprovado"
    }
    else if (media >=5 && media<6.9){
        res = "Recuperacao"
    }
    else{
        res = "Reprovado"
    }

    document.getElementById("resposta").innerText = `Sua media é ${media}, e sua situacao é ${res}`

}