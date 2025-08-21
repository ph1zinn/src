let proximoId = 1;

function criarBaralho(menu, rl, baralhos) {
    rl.question('Digite o nome do título do baralho: ', (titulo) => {

        const baralhoExistente = baralhos.find(u => u.titulo.toLowerCase() === titulo.toLowerCase());


        if (baralhoExistente) {
            console.log('\nErro: Este baralho já foi criado.');
            menu(rl);
            return;
        }
        
        const novoBaralho = {
            id: proximoId++,
            titulo: titulo,
        };

        baralhos.push(novoBaralho);
        console.log('\nBaralho criado com sucesso!');
        menu(rl);
    })
}

module.exports = criarBaralho;