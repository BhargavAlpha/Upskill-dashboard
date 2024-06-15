import React, { useEffect } from 'react';
import './StarButton.css';

const StarButton = ({ text }) => {
    useEffect(() => {
        const button = document.getElementById('starButton');

        let interval;
        let starCount = 0;

        const createStars = (side) => {
            for (let i = 0; i < 2; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.width = '12px';
                star.style.height = '12px';

                if (side === 'right') {
                    star.style.right = `${i * 20}px`; 
                    star.style.top = `${50 + i * 15}%`;
                } else if (side === 'left') {
                    star.style.left = `${i * 20}px`; 
                    star.style.top = `${50 + i * 15}%`;
                }

                button.appendChild(star);

                setTimeout(() => {
                    star.remove();
                }, 2000); 
            }
        };

        interval = setInterval(() => {
            starCount = (starCount + 1) % 3;

            if (starCount === 1) {
                createStars('right');
            } else if (starCount === 2) {
                createStars('left');
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <button id="starButton" className="star-button">
            {text}
        </button>
    );
};

export default StarButton;
