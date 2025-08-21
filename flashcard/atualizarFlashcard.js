function atualizarFlashcard(menu, rl, flashcards) {
    if (flashcards.length === 0) {
        console.log('Não há nenhum flashcard criado.');
        return menu(rl);
    }

    console.log('--- Flashcards Criados ---');

    flashcards.forEach(flashcard => {
        console.log(`ID: ${flashcard.id} |  Pergunta: ${flashcard.pergunta}  |  Resposta: ${flashcard.resposta}`);
    });
    console.log("------------------------");
    
    rl.question('Digite o id do flashcard que deseja atualizar: ', (id) => {
        const flashcardEncontrado = flashcards.find(u => u.id === parseInt(id));

        if (!flashcardEncontrado) {
            console.log('\nErro: Flashcard não encontrado.');
            return menu(rl);
        }

        console.log(`Flashcard encontrado: "${flashcardEncontrado.pergunta}"`);
        rl.question('\nDigite a nova pergunta: ', (novaPergunta) => {
            rl.question('Digite a nova resposta: ', (novaResposta) => {
                
                if(novaPergunta.trim() !== ''){
                    flashcardEncontrado.pergunta = novaPergunta;
                }
                
                if(novaResposta.trim() !== ''){
                    flashcardEncontrado.resposta = novaResposta;
                }

                console.log('\nFlashcard atualizado com sucesso!')
                return menu(rl);
            })
        })
    })
}

module.exports = atualizarFlashcard;