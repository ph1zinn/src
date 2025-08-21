function buscarFlashcardsPorPergunta(menu, rl, flashcards) {
    if (flashcards.length === 0) {
        console.log('\nNão há flashcards para buscar.');
        return menu(rl);
    }

    rl.question('\nDigite a pergunta do flashcard que deseja buscar: ', (termoBusca) => {
        const flashcardEncontrado = flashcards.find(flashcard => flashcard.pergunta.toLowerCase() === termoBusca.toLowerCase());

        if (!flashcardEncontrado) {
            console.log('\nNenhum flashcard encontrado com essa pergunta.');
        } else {
            console.log('\n--- Flashcard Encontrado ---');
            console.log(`ID: ${flashcardEncontrado.id}`);
            console.log(`Pergunta: ${flashcardEncontrado.pergunta}`);
            console.log(`Resposta: ${flashcardEncontrado.resposta}`);
            console.log('---');
        }

        menu(rl);
    });
}

module.exports = buscarFlashcardsPorPergunta;