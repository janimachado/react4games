import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const Trap = () => {
    return (
        <div style={{
            backgroundRepeat: 'no-repeat',
            width: TILE_SIZE,
            height: "100px",
            backgroundImage: "url(./assets/TRAP.png)",
            animation: 'trap-animation 0.5s steps(8) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * 3,
            left: TILE_SIZE * 3,
        }}></div>
    );
}

export default Trap;