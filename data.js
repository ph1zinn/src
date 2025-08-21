const criarBaralho = require('./baralho/criarBaralho');
const listarBaralho = require('./baralho/listarBaralhos');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const deletarBaralho = require('./baralho/deletarBaralho');
const criarFlashcard = require('./flashcard/criarFlashcard')
const listarFlashcard = require('./flashcard/listarFlashcards')
const listarFlashcardPorBaralhoId = require('./flashcard/listarFlashcardsPorBaralhoId');
const atualizarFlashcard = require('./flashcard/atualizarFlashcard');
const deletarFlashcard = require('./flashcard/deletarFlashcard');
const buscarFlashcardPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta');
const buscarFlashcardPorNomeBaralho = require('./flashcard/buscarFlashcardsPorNomeBaralho');

let baralhos = [];
let flashcards = [];

function menu(rl) {
    console.log('\n--- Flashcards System ---');
    console.log('1. Criar Baralho');
    console.log('2. Listar Baralhos');
    console.log('3. Atualizar Baralho');
    console.log('4. Deletar Baralho');
    console.log('5. Criar Flashcard');
    console.log('6. Listar Flashcards');
    console.log('7. Listar Flashcards por Baralho');
    console.log('8. Atualizar Flashcard');
    console.log('9. Deletar Flashcard');
    console.log('10. Buscar Flashcard por Pergunta');
    console.log('11. Buscar Flashcard por nome do Baralho');
    console.log('0. Sair');
    console.log('-------------------------');

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                criarBaralho(menu, rl, baralhos);
                break;
            case '2':
                listarBaralho(menu, rl, baralhos);
                break;
            case '3':
                atualizarBaralho(menu, rl, baralhos);
                break;
            case '4':
                deletarBaralho(menu, rl, baralhos, flashcards);
                break;
            case '5':
                criarFlashcard(menu, rl, baralhos, flashcards);
                break;
            case '6':
                listarFlashcard(menu, rl, flashcards);
                break;
            case '7':
                listarFlashcardPorBaralhoId(menu, rl, baralhos, flashcards);
                break;
            case '8':
                atualizarFlashcard(menu, rl, flashcards);
                break;
            case '9':
                deletarFlashcard(menu, rl, flashcards);
                break;
            case '10':
                buscarFlashcardPorPergunta(menu, rl, flashcards);
                break;
            case '11':
                buscarFlashcardPorNomeBaralho(menu, rl, baralhos, flashcards);
                break;
            case '0':
                console.log('\nObrigado por usar nosso programa. Até mis!');
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                menu(rl);
                break;
        }  
    })
}


module.exports = menu;