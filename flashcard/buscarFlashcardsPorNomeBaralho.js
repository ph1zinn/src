function buscarFlashcardPorNomeBaralho(menu, rl, baralhos, flashcards) {
    if (baralhos.length === 0) {
        console.log('Não há nenhum baralho criado.');
        return menu(rl);
    }

    console.log('--- Lista de Baralhos ---');

    baralhos.forEach(baralho => {
        console.log(`\nTítulo: ${baralho.titulo}`)
    });
    console.log("------------------------");

    rl.question('\nDigite o título do baralho: ', (titulo) => {
        const tituloBaralho = titulo;

        const baralhoEncontrado = baralhos.find(b => b.titulo === tituloBaralho);
        if (!baralhoEncontrado) {
            console.log('\nErro: Baralho não encontrado.');
            return menu(rl);
        }
        const flashcardsDoBaralho = flashcards.filter(flashcard => flashcard.idBaralho === baralhoEncontrado.id);

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

module.exports = buscarFlashcardPorNomeBaralho;