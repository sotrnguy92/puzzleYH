export const swapTile = (boardTiles, clickedTile) => {
    const swappedArr = [...boardTiles];
    const clickedIndex = boardTiles.indexOf(clickedTile);
    const blankIndex = boardTiles.indexOf(boardTiles.length - 1);

    if(canSwap(clickedIndex, blankIndex)) {
        for (let i = 0; i < swappedArr.length; i++) {
            if (swappedArr[i] === clickedTile) {
                swappedArr[i] = swappedArr.length - 1;
            } else if (swappedArr[i] === swappedArr.length - 1) {
                swappedArr[i] = clickedTile;
            }
        }
    }
    return swappedArr;
}

export const canSwap = (clickedIndex, blankIndex) => {
    const clickColumn = clickedIndex % 4;
    const clickRow = Math.floor(clickedIndex/4);
    const blankColumn = blankIndex % 4;
    const blankRow = Math.floor(blankIndex/4)

    if(Math.abs(clickColumn-blankColumn) + Math.abs(clickRow - blankRow) ===1) return true
    else return false
}

export const shuffle = (boardTiles) => {
    let shuffledTiles = [...boardTiles];

    return [...shuffledTiles
        .filter(tile => tile !== shuffledTiles.length-1)
        .sort((a, b) => Math.random()-.5),
        shuffledTiles.length-1]

}

export const checkVictory = (boardTiles) => {
    const victoryBoard = [...Array(16).keys()]

    for (let i = 0; i < victoryBoard.length; i++){
        if (boardTiles[i] !== victoryBoard[i]) return false
    }
    return true;
}

export const hasLost = (moveCount, maxMove) => {
    return moveCount >= maxMove;
}