// Uma possível melhoria para esse código.

enum Profissao {  //Conforme a necessidade, pode ir alimentando o enum Profissao com novas profissões.
    Atriz,
    Padeiro
}


interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
}

const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
}

const pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

