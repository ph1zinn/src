function atualizarBaralho(menu, rl, baralhos){
    if (baralhos.length === 0){
        console.log('Não há nenhum baralho criado.');
        return menu(rl);
    }

    console.log('--- Baralhos criados ---');
    baralhos.forEach(baralho => {
        console.log(`\nID: ${baralho.id}  |  Baralhos: ${baralho.titulo}`);
    });
    console.log("----------------------------");

    rl.question('Digite o ID do baralho que deseja atualizar: ', (id) => {
        const baralhoEncontrado = baralhos.find(u => u.id === parseInt(id));

        if (!baralhoEncontrado) {
            console.log('Erro: Baralho não encontrado');
            return menu(rl);
        }

        console.log(`\nBaralho encontrado: ${baralhoEncontrado.titulo}`);

        rl.question(`Digite o novo título (atual: ${baralhoEncontrado.titulo}): `, (novoTitulo) => {

            if (novoTitulo.trim() !== '') {
                baralhoEncontrado.titulo = novoTitulo;
            }

            console.log('\nBaralho atualizado com sucesso!');
            return menu(rl);
        });
    });
}

module.exports = atualizarBaralho