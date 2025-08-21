function listarFlashcardPorBaralhoId(menu, rl, baralhos, flashcards) {
    if (baralhos.length === 0) {
        console.log('Não há nenhum baralho criado.');
        return menu(rl);
    }

    console.log('--- Lista de Baralhos ---');

    baralhos.forEach(baralho => {
        console.log(`\nID: ${baralho.id}`)
        console.log(`Título: ${baralho.titulo}`)
    });
    console.log("------------------------");

    rl.question('\nDigite o Id do baralho: ', (id) => {
        const idBaralho = parseInt(id);

        const baralhoEncontrado = baralhos.find(b => b.id === idBaralho);
        if (!baralhoEncontrado) {
            console.log('\nErro: Baralho não encontrado.');
            return menu(rl);
        }
        const flashcardsDoBaralho = flashcards.filter(flashcard => flashcard.idBaralho === idBaralho);

        if (flashcardsDoBaralho.length === 0) {
            console.log(`\nNão há flashcards no baralho "${baralhoEncontrado.titulo}".`);
        } else {
            console.log(`\n--- Flashcards do Baralho "${baralhoEncontrado.titulo}" ---`);
            flashcardsDoBaralho.forEach(flashcard => {
                console.log(`ID: ${flashcard.id}`);
                console.log(`Pergunta: ${flashcard.pergunta}`);
                console.log(`Resposta: ${flashcard.resposta}`);
                console.log('---');
            });
        }
        menu(rl);
    })
}

module.exports = listarFlashcardPorBaralhoId;