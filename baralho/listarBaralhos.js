function listarBaralhos(menu, rl, baralhos) {
    if (baralhos.length === 0) {
        console.log('Não há nenhum baralho criado.');
        return menu(rl);
    }

    console.log('--- Lista de Baralhos ---');

    baralhos.forEach(baralho => {
        console.log(`\nID: ${baralho.id}`)
        console.log(`Baralhos: ${baralho.titulo}`);
    });
    console.log("------------------------");
    menu(rl);
}

module.exports = listarBaralhos