import React from 'react';
import './Tile.css'
import img from '../images/default-puzzle.jpg'



export const Tile = ({tile, boardTiles, handleClick}) => {
    const tileColumn = tile % 4;
    const tileRow = Math.floor(tile/4);

    const tileStyle =  {
        backgroundImage: `url(${img})`,
        backgroundSize: "400px 400px",
        backgroundPosition: `${-100*tileColumn}px ${-100*tileRow}px`
    }

    return (
        <div style={tileStyle} className={`tile ${tile===15 ? 'blank': ''}`} onClick={() =>handleClick(boardTiles,tile )}>
            {tile}
        </div>
    )
}