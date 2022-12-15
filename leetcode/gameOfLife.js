// Do not return anything, modify board in-place instead.

/* 
The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population.
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
*/


const gameOfLife = function(board) {

  const originalBoard = JSON.parse(JSON.stringify(board)); 

  const sumNeighbours = (x,y,originalBoard) => {
    // console.log("/sumNeighbors//////////////////////")
    // console.log("x", x)
    // console.log("y", y)
    let sum = 0
    for (let i=-1; i<=1; i++) {
      for (let j=-1; j<=1; j++) {
        let neighbourX = parseInt(x) + i
        // console.log(neighbourX, "=neighbourX")
        let neighbourY = parseInt(y) + j
        // console.log(neighbourY, "=neighbourY")
        if ( neighbourX >= 0 
          && neighbourX < originalBoard.length 
          && neighbourY >= 0 
          && neighbourY < originalBoard[x].length 
          && !(i === 0 && j === 0)) {
            sum += originalBoard[neighbourX][neighbourY]
            // console.log(sum, "=sum")
        }
      }
    }
    return sum
  }

  for (x in originalBoard) {
    for (y in originalBoard[x]) {
      const currentCell = originalBoard[x][y]
      const neighbors = sumNeighbours(x,y,originalBoard)
      if (currentCell === 1 && (neighbors > 3 || neighbors < 2)) board[x][y] = 0
      if (currentCell === 0 && neighbors === 3) board[x][y] = 1
    }
  }
}

const game1 = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
const game1ExpectedNextStage = [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
gameOfLife(game1)
console.log(game1, "should be\n",game1ExpectedNextStage)

const game2 = [[1,1],[1,0]]
const game2ExpectedNextStage = [[1,1],[1,1]]
gameOfLife(game2)
console.log(game2, "should be\n",game2ExpectedNextStage)