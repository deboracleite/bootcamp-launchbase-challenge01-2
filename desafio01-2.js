
// Construção e impressão de objetos

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }

}

console.log (`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// Vetores e objetos

const pessoa ={
    nome: 'Debora',
    idade: 26,
    tecnologias:[
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${pessoa.nome} tem ${pessoa.idade} e usa a tecnologia ${pessoa.tecnologias[0].nome} com especialidade em ${pessoa.tecnologias[0].especialidade}.`)