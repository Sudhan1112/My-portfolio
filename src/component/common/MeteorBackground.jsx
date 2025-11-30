import React from "react";
import "./styles/meteorBackground.css";

const MeteorBackground = () => {
    // Create an array of meteors
    const meteors = new Array(20).fill(true);

    return (
        <div className="meteor-background">
            {meteors.map((_, index) => {
                // Randomize properties for each meteor
                const left = 50 + Math.floor(Math.random() * 50) + "%"; // Start from right side (50-100%)
                const animationDelay = Math.random() * 5 + "s";
                const animationDuration = Math.random() * 3 + 3 + "s"; // Between 3s and 6s
                const width = Math.random() * 100 + 50 + "px"; // Random length (50-150px)

                const style = {
                    left,
                    animationDelay,
                    animationDuration,
                };

                return <span key={index} className="meteor" style={style}></span>;
            })}
        </div>
    );
};

export default MeteorBackground;
