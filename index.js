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

    const writeMarker = (x, y) => {
        if (board[x][y] != '-') {
            console.log('the cell is already taken')
            return;
        } 
        board[x][y] = 'X'
    }

    return {drawBoard, board, writeMarker}
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

    return { drawBoard}
}) ()


const Player = (name, marker) =>{

    return {name, marker}
}

GameBoard.drawBoard()
console.log(GameBoard.board)

One = Player('Johnny', 'X')



GameBoard.writeMarker(1,2)

DisplayController.drawBoard()
