const GameBoard = (() => {
    let board = []
    let first_player
    let second_player
    let current_player


    const assignPlayers = (player_one, player_two) => {
        first_player = player_one
        second_player = player_two

        current_player = first_player
    }

    const changePlayer = () => {
        current_player = (current_player === first_player ? second_player : first_player)
    }

    const resetBoard = () => {
        //resets the board to the starting value
        for (let i = 0; i < 3; i++) {
            board[i] = []
            for (let j = 0; j < 3; j++) {
                board[i].push(['-'])
            }
        }
        DisplayController.drawBoard()
    }

    const checkWin = () => {
        if (board[0][0] === board[1][1] && board[0][0]=== board[2][2] && board[0][0] != '-'){
            DisplayController.displayWinner(current_player)
        }

        if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] != '-'){
            DisplayController.displayWinner(current_player)
        }
        for (let i = 0 ; i<3; i++) {
            if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] != '-') {
                DisplayController.displayWinner(current_player)
            }
            if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] != '-') {
                DisplayController.displayWinner(current_player)
            }
        }
        
    }

    const writeMarker = (x, y) => {
        if (board[x][y] != '-') {
            console.log('the cell is already taken')
            return;
        } 
        board[x][y] = current_player.marker
        DisplayController.drawBoard()
        checkWin()
        changePlayer()
    }

    

    return {
        get board() {
            return board;
        }, 
        resetBoard, 
        writeMarker, 
        assignPlayers, 
        changePlayer}
}) ()


const DisplayController = (() => {
    

    const drawBoard = () => {
        const container = document.querySelector(".board")
        container.textContent = ''
        for (let i =0; i<3; i++){
            for (let j =0; j<3; j++){
                cell = document.createElement('div')
                cell.textContent = GameBoard.board[i][j]
                cell.classList.add('cell')
                
                cell.addEventListener('click', () => {
                    GameBoard.writeMarker(i,j)}
                    )

                container.appendChild(cell)
            }
        }
    }

    const displayWinner = (player) =>{
        const container = document.querySelector(".board")
        winner_text = "The winner is " + player.name;
        console.log(winner_text)
        winner_p = document.createElement('div');
        winner_p.textContent = winner_text
        winner_p.classList.add('win');
        container.replaceChildren(winner_p)


    }
    return {drawBoard, displayWinner}
}) ()


const Player = (name, marker) =>{

    return {name, marker}
}

One = Player('Johnny', 'X')
Two = Player('Mark', 'O')

GameBoard.assignPlayers(One, Two)


reset_button = document.querySelector('.reset')
reset_button.addEventListener('click', () => {
    GameBoard.resetBoard()
    }
    )