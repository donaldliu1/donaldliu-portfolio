"use client"
import React, { useState } from 'react';

interface SkillsProps {
    catergory: string
}

// Variable called JobProps which takes in title, start and end as input
const SkillProps: React.FC<SkillsProps> = ({ catergory }) => {
    // Defining useState variables 
    const [isSpanVisible, setIsSpanVisible] = useState(true);

    // Defining variable for onClick which sets the span state
    const handleButtonClick = () => {
        setIsSpanVisible(false);
    };

    return (
    // Button which clicked triggers the handleButtonClick function
    // If isSpanVisible true then show the following span code
    <button className="relative flex flex-col justify-between text-white p-0.5 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500" onClick={handleButtonClick}>
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

export default SkillProps