import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const Hero = () => {
    return (
        <div style={{
            backgroundRepeat: 'no-repeat',
            width: TILE_SIZE,
            height: "100px",
            backgroundImage: "url(./assets/HERO.png)",
            animation: 'hero-animation 0.5s steps(4) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * 3,
            left: TILE_SIZE * 3,
        }}></div>
    );
}

export default Hero;