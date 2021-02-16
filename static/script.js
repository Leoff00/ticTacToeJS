const header = document.querySelector('header');
header.textContent = 'TIC - TAC - TOE'

const p = document.querySelector('#msg1');
p.textContent = 'Jogador 1 = X, Jogador 2 = O'

const game = {
    //game attributes.
    board: ['', '', '', '', '', '', '', '', ''],
    gameOver: false,
    combinations: [
        [0, 1, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],
    config: {
        player: [1, 2],
        players: ['X', 'O'],
        turn: 0,
        swapTurn() {
            this.turn = this.turn === 0 ? 1 : 0
        }
    },

    //Alternar entre o X e o O
    //Verifica se houve algum ganhador
    makePlay(position) {
        if (this.gameOver) return false;

        if (this.board[position] === '') {
            this.board[position] = this.config.players[this.config.turn];
            this.draw();
            let sequence = this.verifyWin(this.config.players[this.config.turn])
            if (sequence >= 0) {
                this.endGame();
            } else {
                this.config.swapTurn();
            }
            return true;
        } else {
            return false;
        }
    },

    endGame() {
        const p2 = document.querySelector('#msg2');
        this.gameOver = true;
        p2.innerHTML = `Fim de jogo! O jogador ${this.config.player[this.config.turn]} é o vencedor!!!`
    },

    //Desenhar o X e o O na tela
    draw() {
        const table = document.querySelector('.table');
        let drawing = ''
        for (let i in this.board) {
            drawing += `<div onclick="game.makePlay(${i})">${this.board[i]}</div>`
        }
        table.innerHTML = drawing;

    },

    //zerar as divs e recomeçar o jogo
    restart() {
        const btn = document.getElementById('btn')
        btn.innerText = 'Reiniciar'
        btn.addEventListener('click', () => {
            this.board.fill('');
            this.draw()
            this.gameOver = false;
            const p2 = document.querySelector('#msg2');
            setTimeout(() => {
                p2.innerHTML = ''
            }, 50);

        })

    },

    //verificar se o jogador atingiu alguma posicao do array combinations
    verifyWin(player) {

        for (let i in this.combinations) {
            if (this.board[this.combinations[i][0]] === player &&
                this.board[this.combinations[i][1]] === player &&
                this.board[this.combinations[i][2]] === player) {
                return i;
                console.log(`Voce venceu, posicao -> ${i}`);
            }
        }
    }

}

//inicializando funcionalidades

game.draw()
game.makePlay()
game.restart()
game.verifyWin()