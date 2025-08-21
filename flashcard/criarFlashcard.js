let proximoIdFlashcard = 1;

function criarFlashcard(menu, rl, baralhos, flashcards) {
    if (baralhos.length === 0) {
        console.log('Não há nenhum baralho criado.');
        return menu(rl);
    }
    console.log('--- Lista de Baralhos ---');

    baralhos.forEach(baralho => {
        console.log(`\nID: ${baralho.id}`)
        console.log(`Baralhos: ${baralho.titulo}`);
    });

    rl.question('\nDigite o ID do baralho que deseja adicionar o flashcard: ', (idBaralho) => {
        const idBaralhoValidado = parseInt(idBaralho);
        const baralhoExistente = baralhos.find(b => b.id === idBaralhoValidado);

        if (!baralhoExistente) {
            console.log('\nErro: Baralho não encontrado.');
            return menu(rl);
        }

        rl.question('Digite a pergunta do flashcard: ', (pergunta) => {
            rl.question('Digite a resposta do flashcard: ', (resposta) => {
                const novoFlashcard = {
                    id: proximoIdFlashcard++,
                    pergunta,
                    resposta,
                    idBaralho: idBaralhoValidado
                };

                flashcards.push(novoFlashcard);
                console.log('\nFlashcard criado com sucesso!');
                menu(rl);
            });
        });
    });
}

module.exports = criarFlashcard;