//Com filter
// lista = [
//     {nome: 'Maurício Sousa', media: 8},
//     {nome: 'Luciano Sousa', media: 7},
//     {nome: 'Patricia Sousa', media: 6},
//     {nome: 'Gessica Sousa', media: 5}
// ];

// function aprovados(listaDeAlunos){
//     return listaDeAlunos.filter(aluno => aluno.media >= 6);
// }
// console.log(aprovados(lista));




lista = [
    {nome: 'Maurício Sousa', notas: [6,7,8,9]},
    {nome: 'Luciano Sousa', notas: [4,5,8,9]},
    {nome: 'Patricia Sousa', notas: [2,5,4,4]},
    {nome: 'Gessica Sousa', notas: [3,7,4,2]}
];
class Avaliacao {
    calculaMedia(notas){
        const nota = notas.reduce((total, notaAtual) =>{
            total += notaAtual;
            return total;
        }, 0);
        return nota / 4;
    };

    aprovados(listaDeAlunos){
        const alunosAprovados = []
        listaDeAlunos.filter(aluno => {
            const notas = aluno.notas;
            const media = this.calculaMedia(notas);
            if(media >= 6){
                aluno.media = media;
                alunosAprovados.push(aluno);
            }
        })
        return alunosAprovados.filter(aluno => aluno.media >= 6);
    }
    
    exibeAprovados(listaDeAprovados){
        const aprovados = this.aprovados(listaDeAprovados);
        return aprovados;
    }

    exibeNomesDeAprovados(listaDeAprovados){
        const alunosAprovados = this.aprovados(listaDeAprovados);
        for (const aprovado of alunosAprovados){
            console.log(aprovado.nome)
        }
    }

    
}

const avaliacao = new Avaliacao();
console.log(avaliacao.exibeAprovados(lista));
avaliacao.exibeNomesDeAprovados(lista);
