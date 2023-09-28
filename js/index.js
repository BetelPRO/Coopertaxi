let log_nome = getElementById('nome')
let log_senha = getElementById('senha')
const bot = getElementById('bot').value

cc
let conf = {
    method: 'post',
    body:JSON.stryngify(usuario),
}

function Cadastro(){
    let end = "https://api.sheetmonkey.io/form/kETdvSWYytj6acXznMUMXv"
    fetch(end)
    .then(res=>res.json())
    .then(usuario=>{
        log_nome.innerHTML=usuario.nome
        log_senha.innerHTML=usuario.senha
        alert(usuario.nome)
    })

    var nome = document.getElementById('nome').value
    var senha = document.getElementById("senha").value
    
    alert(usuario.nome)
    if(nome == log_nome && senha == log_senha){
        alert("ok")
    }else{alert('erro')}
}

