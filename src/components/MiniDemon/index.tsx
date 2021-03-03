import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const MiniDemon = () => {
    return (
        <div style={{
            backgroundRepeat: 'no-repeat',
            width: TILE_SIZE,
            height: "100px",
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            animation: 'mini-demon-animation 0.5s steps(4) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * 1,
            left: TILE_SIZE * 1,
        }}></div>
    );
}

export default MiniDemon;