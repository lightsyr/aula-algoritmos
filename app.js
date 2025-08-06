class Personagem{
    constructor(classe){
        this.classe = classe
    }
}

/* Comentario */

function escolheClasse(classe){
    if(classe = "guerreiro"){
        return new Personagem(classe)
    }
}

let personagem1 = escolheClasse("guerreiro")
console.log(personagem1)

console.log("Alteração")