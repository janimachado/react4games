import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const Chest = () => {
    return (
        <div style={{
            backgroundRepeat: 'no-repeat',
            width: TILE_SIZE,
            height: "100px",
            backgroundImage: "url(./assets/CHEST.png)",
            animation: 'chest-animation 0.5s steps(3) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * 4,
            left: TILE_SIZE * 6,
        }}></div>
    );
}

export default Chest;