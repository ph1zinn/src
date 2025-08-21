function deletarFlashcard(menu, rl, flashcards) {
    if (flashcards.length === 0) {
        console.log('Não há nenhum flashcard criado.');
        return menu(rl);
    }

    console.log('--- Flashcards Criados ---');

    flashcards.forEach(flashcard => {
        console.log(`Pergunta: ${flashcard.pergunta}  |  Resposta: ${flashcard.resposta}`);
    });
    console.log("------------------------");
    
    rl.question('\nDigite o Id do flashcard que você deseja deletar: ', (id) => {
        const idParaDeletar = parseInt(id);
        const indiceFlashcard = flashcards.findIndex(u => u.id === idParaDeletar);

        if(indiceFlashcard === -1){
            console.log('Erro: Flashcard não encontrado.');
            return menu(rl);
        }
        flashcards.splice(indiceFlashcard, 1)
        console.log('Flashcard deletado com sucesso!');
        return menu(rl);
    })
}

module.exports = deletarFlashcard;