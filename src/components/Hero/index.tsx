import React from 'react';
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import './index.css';

const Hero = () => {
    return (
        <div style={{
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url(./assets/HERO.png)",
            animation: 'hero-animation 0.5s steps(4) infinite',
            position: 'absolute',
            backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px` ,
            height: TILE_SIZE + HEAD_OFFSET,
            width: TILE_SIZE,
            bottom: TILE_SIZE * 3,
            left: TILE_SIZE * 3,
        }}></div>
    );
}

export default Hero;