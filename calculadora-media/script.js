function calc(){

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    let media = (nota1 + nota2)/2

    document.getElementById("resposta").innerText = media;

}