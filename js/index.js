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
        ['Manoel', 'manoel-junioir96@hotmail.com', 'man0junior', '81994629566'],
        ['Daniel', 'danieelcordeiro325@gmail.com', '19042002', '81985944217']]
    let nome = log_nome.value
    let senha = log_senha.value
    let i = 0
    var u_inv = 0
    for(i; i<=5; ++i){
        userNome = usuarios[i][0]
        userSenha = usuarios[i][2]
        if(nome === userNome){
            if(senha === userSenha){
                window.open("https://betelpro.github.io/Coopertaxi/paginas/pag01.html")
                window.close("https://betelpro.github.io/Coopertaxi")
                return;
            }else{
                alert('Senha incorreta')
                u_inv = 1}}
    }
    if(u_inv === 0){
        alert("Usuário não encontrado")
        return;
    }
}

function red(){
    window.location.replace("../paginas/pag01.html")
}
function cadastro(){
    alert('sucess')
}

