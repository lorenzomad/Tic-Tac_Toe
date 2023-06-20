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
            console.log("diagonal 1 winner is " + board[0][0])
        }

        if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] != '-'){
            console.log("diagonal 2 winner is " + board[2][0])
        }
        for (let i = 0 ; i<3; i++) {
            if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] != '-') {
                console.log("horizontal winner is " + board[i][0])
            }
            if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] != '-') {
                console.log("vertical winner is " + board[0][i])
            }
        }
        
    }

    const writeMarker = (x, y) => {
        if (board[x][y] != '-') {
            console.log('the cell is already taken')
            return;
        } 
        board[x][y] = current_player.marker
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
    const container = document.querySelector(".board")

    const drawBoard = () => {
        container.textContent = ''
        for (let i =0; i<3; i++){
            for (let j =0; j<3; j++){
                cell = document.createElement('div')
                cell.textContent = GameBoard.board[i][j]
                cell.style.backgroundColor = 'blue'
                
                cell.addEventListener('click', () => {
                    GameBoard.writeMarker(i,j)
                    drawBoard()}
                    )

                container.appendChild(cell)
            }
        }
    }

    return {drawBoard}
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