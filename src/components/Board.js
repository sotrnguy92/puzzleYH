import React, {useState} from 'react';
import './Board.css'
import {Tile} from './Tile'
import {swapTile, shuffle, checkVictory, hasLost} from '../utils'

export const Board = () => {
    const [boardTiles, setBoardTiles] = useState([...Array(16).keys()])
    const [totalMoves, setTotalMoves] = useState(0);
    const [started, setStarted] = useState(false);

    const victory = checkVictory(boardTiles);
    const checkLoss = hasLost(totalMoves, 5)

    const handleClick = (tilesArr, clickedTile) =>{
        setBoardTiles(swapTile(tilesArr, clickedTile));
        setTotalMoves(totalMoves+1)
    }

    const handleStart = () => {

        if(!started) {
            // //uncomment for mock board
            // let mockBoard = [...Array(16).keys()]
            // mockBoard[mockBoard.length-1] = 14
            // mockBoard[mockBoard.length-2] = 15
            // setBoardTiles(mockBoard)
            // // end of mock board section

            //comment out setBoardTiles when using mock board
            setBoardTiles(shuffle(boardTiles));
            setStarted(true);
            setTotalMoves(0);
        }else{
            setBoardTiles([...Array(16).keys()])
            setStarted(false);
        }

    }

    return (
        <>
            <h3>Total Moves: {totalMoves}</h3>
            {victory && started && <h2> YOU WON IN {totalMoves} MOVES!!</h2>}
            {checkLoss && <h2>YOU LOST TRY AGAIN!</h2>}
            <div className="board">
                {boardTiles.map((tile,index) => {
                    return  <Tile tile={tile} handleClick={checkLoss||victory ? ()=>{}: handleClick} boardTiles={boardTiles}/>
                })}
            </div>

            <button className="shuffle-btn" onClick={handleStart}> {started ? "Restart" :"Start"} </button>
        </>

    )
}