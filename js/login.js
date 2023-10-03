var log_nome = document.getElementById('nome');
var log_senha = document.getElementById('senha');
const bot = document.getElementById('bot');

function login() {
    let usuarios = [
        ["deivid", "deivid.procopio@ufpe.br", "180624"],
        ["Celia", "diogo.tiburcio@ufpe.br", "celiaamor"],
        ['Deivid', 'deividprocopio7@gmail.com', '1806', '81986728498'],
        ['Diogo Procópio', 'diogoprocopio07@gmail.com', 'diogo123', '81986047766'],
        ['Thais', 'thaisdesouzabm@gmail.com', 'thais12e', '81995117712'],
        ['Manoel', 'manoel-junioir96@hotmail.com', 'man0junior', '81994629566']
    ];

    let nome = log_nome.value; 
    let senha = log_senha.value; 
    let i = 0;
    let u_inv = 0;

    for (i; i <= 5; ++i) {
        let userNome = usuarios[i][0];
        let userSenha = usuarios[i][2];

        if (nome === userNome) {
            if (senha === userSenha) {
                window.open("https://betelpro.github.io/Coopertaxi/paginas/pag01.html", "_self");
                return;
            } else {
                alert('Senha incorreta');
                u_inv = 1;
            }
        }
    }

    if (u_inv === 0) {
        alert("Usuário não encontrado");
    }
}

function red() {
    window.open("../paginas/pag01.html", "_self");
}

function cadastro() {
    alert('sucesso');
}