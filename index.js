const GameBoard = (() => {
    let board = []
    let first_player
    let second_player
    let current_player
    let winner = ''


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
        document.querySelector('.winner').textContent = ''
        name1 = document.querySelector('#player-1 > p').textContent
        name2 = document.querySelector('#player-2 > p').textContent

        const One = Player(name1, 'X')
        const Two = Player(name2, 'O')
        assignPlayers(One, Two)

        winner = ''
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
            winner = current_player.name
        }

        if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] != '-'){
            DisplayController.displayWinner(current_player)
            winner = current_player.name
        }
        for (let i = 0 ; i<3; i++) {
            if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] != '-') {
                DisplayController.displayWinner(current_player)
                winner = current_player.name
            }
            if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] != '-') {
                DisplayController.displayWinner(current_player)
                winner = current_player.name
            }
        }
        
    }

    const writeMarker = (x, y) => {
        if (winner != ''){
            console.log("start a new game to continue")
            return;
        }
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
                if (i===0){
                    cell.classList.add('top')
                }
                if (i===2){
                    cell.classList.add('bottom')
                }
                if (j===0){
                    cell.classList.add('left')
                }
                if (j===2){
                    cell.classList.add('right')
                }
                cell.addEventListener('click', () => {
                    GameBoard.writeMarker(i,j)}
                    )

                container.appendChild(cell)
            }
        }
    }

    const displayWinner = (player) =>{
        const winner_container = document.querySelector(".winner")
        winner_text = "The winner is " + player.name;
        console.log(winner_text)
        winner_p = document.createElement('div');
        winner_p.textContent = winner_text
        winner_p.classList.add('win');
        winner_container.replaceChildren(winner_p)


    }
    return {drawBoard, displayWinner}
}) ()


const Player = (name, marker) =>{

    return {name, marker}
}

reset_button = document.querySelector('.reset')
reset_button.addEventListener('click', () => {
    GameBoard.resetBoard()
    }
    )

name1_button = document.querySelector("#player-1 > button")
name1_button.addEventListener('click', () => {
    document.querySelector("#player-1 > p").textContent = prompt("Choose new name")
})

name2_button = document.querySelector("#player-2 > button")
name2_button.addEventListener('click', () => {
    document.querySelector("#player-2 > p").textContent = prompt("Choose new name")
})