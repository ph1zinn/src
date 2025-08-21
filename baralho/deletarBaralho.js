// src/baralho/deletarBaralho.js
function deletarBaralho(menu, rl, baralhos, flashcards) {
    if (baralhos.length === 0) {
        console.log('\nNão há nenhum baralho para deletar.');
        return menu(rl);
    }

    console.log('\n--- Baralhos Criados ---');
    baralhos.forEach(baralho => {
        console.log(`\nID: ${baralho.id} | Título: ${baralho.titulo}`);
    });
    console.log("------------------------");
    
    rl.question('\nDigite o ID do baralho que deseja deletar: ', (id) => {
        const idParaDeletar = parseInt(id);
        const indiceBaralho = baralhos.findIndex(b => b.id === idParaDeletar);

        if (indiceBaralho === -1) {
            console.log('\nErro: Baralho não encontrado.');
            return menu(rl);
        }

        const flashcardsRestantes = flashcards.filter(flashcard => flashcard.idBaralho !== idParaDeletar);
        
        flashcards.splice(0, flashcards.length, ...flashcardsRestantes);

        baralhos.splice(indiceBaralho, 1);

        console.log('\nBaralho e flashcards relacionados deletados com sucesso!');
        menu(rl);
    });
}

module.exports = deletarBaralho;