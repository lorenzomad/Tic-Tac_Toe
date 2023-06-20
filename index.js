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
    }

    const writeMarker = (x, y) => {
        if (board[x][y] != '-') {
            console.log('the cell is already taken')
            return;
        } 
        board[x][y] = current_player.marker
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

console.log(GameBoard.board)
GameBoard.assignPlayers(One, Two)
GameBoard.resetBoard()

console.log(GameBoard.board)


reset_button = document.querySelector('.reset')
reset_button.addEventListener('click', () => {
    GameBoard.resetBoard()
    DisplayController.drawBoard()}
    )