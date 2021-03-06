import React from 'react';
import { DEMON_TILE_SIZE, TILE_SIZE } from '../../settings/constants';
import './index.css';

const Demon = () => {
    return (
        <div style={{
            backgroundRepeat: 'no-repeat',
            width: DEMON_TILE_SIZE,
            height: DEMON_TILE_SIZE,
            backgroundImage: "url(./assets/DEMON.png)",
            animation: 'demon-animation 0.5s steps(4) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * 6,
            left: TILE_SIZE * 8,
        }}></div>
    );
}

export default Demon;