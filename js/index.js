var log_nome = getElementById('nome')
let log_senha = getElementById('senha')
const bot = getElementById('bot').value



function login(){
    let usuarios = [
        ["deivid","deivid.procopio@ufpe.br","180624"],
        ["Celia","diogo.tiburcio@ufpe.br","dsqsqds"]]
    var nome = document.getElementById('nome').value
    var senha = document.getElementById("senha").value
    
    let i = 0
    for(i; i<=2; ++i){
        log_nome = usuarios[i][0]
        if(nome == log_nome){
            alert(nome)
            if(nome == log_nome && senha == log_senha){
                alert("ok")
            }else{alert('erro')}}
    }
}

function Cadastro(){
    var nome = document.getElementById('nome').value
    var senha = document.getElementById("senha").value
    
    alert(nome)
    if(nome == log_nome && senha == log_senha){
        alert("ok")
    }else{alert('erro')}
}

