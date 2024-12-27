const prompt = require('prompt-sync')({sigint: true});
let peixesPegos = 0;
let probabilidade = 0;
let tentativas = 0;

function JogarPesca () {
    let continuar = true;

    while (continuar) {
        tentativas ++;
        prompt("Pressione Enter para pescar!");
        const numeroAleatorio = Math.ceil (Math.random() * 500) + 50;

        if (numeroAleatorio <= probabilidade) {
            peixesPegos++;
            console.log ("Parabéns, você pescou o peixe")
        } else {
            console.log ("Que pena, o peixe escapou.")
        }
        const resposta = prompt("Deseja pescar novamente? (sim/não?)");
        continuar = resposta.toLocaleLowerCase() == 'sim';
    }
    console.log(`Você jogou ${tentativas} vezes e pegou ${peixesPegos}peixes.`);
}
    JogarPesca();