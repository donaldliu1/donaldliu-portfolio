"use client"
import React from 'react';

interface SkillsProps {
    catergory: string
    onClick: () => void;
    isSpanVisible: boolean;
}

// Variable called SkillProps which takes in category as input
const SkillProps: React.FC<SkillsProps> = ({ catergory, onClick, isSpanVisible }) => {
    return (
        <button className="relative flex flex-col justify-between text-white m-0.5 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500" onClick={onClick}>
            <div className="flex">
                <p className="pl-1">{catergory}</p>
                {isSpanVisible && (
                    <span className="absolute top-[-4.5px] right-[-0.5px] h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                )}
            </div>
        </button>
    );
}

export default SkillProps;
