const GameBoard = (() => {
    let board = []
    
    for (let i = 0; i < 3; i++) {
        board[i] = []

        for (let j =0; j<3; j++) {
            board[i].push(['-'])
        }
        
    }
    

    const drawBoard = () => {
        //draws the board to console
        
        for (let i =0; i<3; i++){
            for (let j =0; j<3; j++){
                console.log(board[i][j])
            }
        }

    }

    const writeMarker = (player, x, y) => {
        if (board[x][y] != '-') {
            console.log('the cell is already taken')
            return;
        } 
        board[x][y] = player.marker
    }

    return {drawBoard, board, writeMarker}
}) ()


const DisplayController = (() => {

    const drawBoard = (container) => {
        for (let i =0; i<3; i++){
            for (let j =0; j<3; j++){
                cell = document.createElement('div')
                cell.textContent = GameBoard.board[i][j]
                container.appendChild(cell)

                cell.addEventListener('click', GameBoard.writeMarker())

                
                
                
            }
        }
    }

    return { drawBoard}
}) ()


const Player = (name, marker) =>{

    return {name, marker}
}

GameBoard.drawBoard()
console.log(GameBoard.board)

One = Player('Johnny', 'X')

container = document.querySelector(".board")

GameBoard.writeMarker(One, 1,2)

DisplayController.drawBoard(container)
