import React from 'react';
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import './index.css';

const MiniDemon = () => {
    return (
        <div style={{
            backgroundRepeat: 'no-repeat',
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            animation: 'mini-demon-animation 0.5s steps(4) infinite',
            position: 'absolute',
            backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
            bottom: TILE_SIZE * 1,
            left: TILE_SIZE * 1,
        }}></div>
    );
}

export default MiniDemon;