let nomeDoHeroi = "Tinhão do Machado"; // Variável do nome do herói
let xpDoHeroi = 7001 // Variável de quantidade de XP do seu herói

// Estrutura switch-case para determinar o nível do herói com base na quantidade de XP
let  nivelDoHeroi // Variável para determinar o nível do herói

switch (true) {
    case xpDoHeroi < 1000:
        nivelDoHeroi = "Ferro";
        break;
    case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
        nivelDoHeroi = "Bronze";
        break;
    case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
        nivelDoHeroi = "Prata";
        break;
    case xpDoHeroi >= 5001 && xpDoHeroi <= 7000:
        nivelDoHeroi = "Ouro";
        break;
    case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
        nivelDoHeroi = "Platina";
        break;
    case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
        nivelDoHeroi = "Ascendente";
        break;
    case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
        nivelDoHeroi = "Imortal";
        break;
    default:
        nivelDoHeroi = "Radiante";
}

// Mensagem a ser exibida no final
console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)