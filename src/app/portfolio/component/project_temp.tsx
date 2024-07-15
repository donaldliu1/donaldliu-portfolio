"use client"
// Import react
import React from 'react';

// Defines expected data types of JobProps
interface ProjectProps {
    name: string;
    img: string;
    focus: string;
    onClick: () => void;
    isSpanVisible: boolean;
}

// Variable called Project_temp which takes in name, img, focus as input
const Project_temp: React.FC<ProjectProps> = ({ name, img, focus, onClick, isSpanVisible }) => {
    return (
        <button className="relative flex flex-col justify-between text-white p-0.5 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500" onClick={onClick}>
            <div className="place-self-center">
                {isSpanVisible && (
                    <span className="absolute top-[-4.5px] right-[-0.5px] h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                )}
                <p className="text-2xl">{name}</p>
                <p className="font-extralight text-sm">{focus}</p>
            </div>
            <div>
                <img src={img} alt={name}/>
            </div>
        </button>
    );
}

export default Project_temp;
