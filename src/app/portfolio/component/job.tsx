"use client"
// Import react
import React from 'react';

// Defines expected data types of JobProps
interface JobProps {
    title: string
    start: string
    end: string
    onClick: () => void;
    isSpanVisible: boolean;
}

// Variable called JobProps which takes in title, start and end as input
const JobProps: React.FC<JobProps> = ({ title, start, end, onClick, isSpanVisible }) => {
    return (
        <button className="relative flex flex-col justify-between text-white p-0.5 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500" onClick={onClick}>
            <div className="flex">
                <p className="pl-1">{title}</p>
                {isSpanVisible && (
                    <span className="absolute top-[-4.5px] right-[-0.5px] h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                )}
            </div>
            <p className="font-extralight pl-3">{start} - {end}</p>
        </button>
    );
}

export default JobProps;
