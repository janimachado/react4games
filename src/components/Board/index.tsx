import React from 'react';
import { GAME_SIZE } from '../../settings/constants';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';


const Board = () => {
    return (
        <div>
            <MiniDemon />
            <Hero />
            <img src="./assets/tileset.gif" width={GAME_SIZE} height={GAME_SIZE}></img>
        </div>
    );
}

export default Board;