var log_nome = getElementById('nome')
var log_senha = getElementById('senha')
const bot = getElementById('bot').value


function login(){
    let usuarios = [
        ["deivid","deivid.procopio@ufpe.br","180624"],
        ["Celia","diogo.tiburcio@ufpe.br","celiaamor"],
        ['Deivid','deividprocopio7@gmail.com','1806','81986728498'],
        ['Diogo Procópio' ,'diogoprocopio07@gmail.com','diogo123','81986047766'],
        ['Thais','thaisdesouzabm@gmail.com','thais12e','81995117712'],
        ['Manoel', 'manoel-junioir96@hotmail.com', 'man0junior', '81994629566']]
    let nome = document.getElementById('nome').value
    let senha = document.getElementById("senha").value
    let i = 0
    var u_inv = 0
    for(i; i<=5; ++i){
        log_nome = usuarios[i][0]
        if(nome == log_nome){
            log_senha = usuarios[i][2]
            if(senha == log_senha){
                document.location.replace("https://betelpro.github.io/Coopertaxi/")
                return
            }else{
                alert('Senha incorreta')
                u_inv = 1}}
    }
    if(u_inv == 0){
        alert("Usuário não encontrado")
    }
}

function red(){
    window.location.replace("../paginas/pag01.html")
}
function cadastro(){
    alert('sucess')
}

