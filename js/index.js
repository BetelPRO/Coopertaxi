var log_nome = getElementById('nome')
var log_senha = getElementById('senha')
const bot = getElementById('bot').value


function login(){
    let usuarios = [
        ["deivid","deivid.procopio@ufpe.br","180624"],
        ["Celia","diogo.tiburcio@ufpe.br","dsqsqds"]
        ['Deivid','deividprocopio7@gmail.com','1806','81986728498']
        ['Diogo Procópio' ,'diogoprocopio07@gmail.com','diogo123','81986047766']
        ['Thais','thaisdesouzabm@gmail.com','thais12e','81995117712']]
        
    var nome = document.getElementById('nome').value
    var senha = document.getElementById("senha").value
    let i = 0
    for(i; i<=2; ++i){
        log_nome = usuarios[i][0]
        if(nome == log_nome){
            log_senha = usuarios[i][2]
            if(senha == log_senha){
                location.href = "https://betelpro.github.io/Coopertaxi/paginas/pag01.html"
                alert(log_nome)
                alert(log_senha)}
            else{location.href = "https://betelpro.github.io/Coopertaxi"}}}   
}

function Cadastro(){
    var nome = document.getElementById('nome').value
    var senha = document.getElementById("senha").value
    
    alert(nome)
    if(nome == log_nome && senha == log_senha){
        alert("ok")
    }else{alert('erro')}
}

