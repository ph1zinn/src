function listarFlashcard(menu, rl, flashcards) {
    if (flashcards.length === 0) {
        console.log('Não há nenhum flashcard criado.');
        return menu(rl);
    }

    console.log('--- Flashcards Criados ---');

    flashcards.forEach(flashcard => {
        console.log(`Pergunta: ${flashcard.pergunta}  |  Resposta: ${flashcard.resposta}`);
    });
    console.log("------------------------");
    menu(rl);
};

module.exports = listarFlashcard;