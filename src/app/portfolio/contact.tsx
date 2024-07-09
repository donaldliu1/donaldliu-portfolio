'use client'
import React from 'react';

export default function Contact() {
    const copyToClipboard = () => {
        const email = 'donaldliu1313@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            alert('Email address copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <>
            <div className="grid row-start-11 row-span-2 col-span-full bg-purple-900 m-1.5 text-white p-3 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-evenly mt-1">
                    <a href="https://github.com/donaldliu1" target="_blank" className="flex flex-col justify-center">
                        <img src="github.svg" alt="GitHub" className="w-11 h-11" />
                        <p className="mt-2">Github</p>
                    </a>
                    <a href="https://www.linkedin.com/in/donald-liu-2187b1153/" target="_blank" className="flex flex-col justify-center">
                        <img src="linkedin.png" alt="Linkedin" className="w-11 h-11" />
                        <p className="mt-2">Linkedin</p>
                    </a>
                    <button onClick={copyToClipboard} className="flex flex-col items-center">
                        <img src="gmail.webp" alt="Gmail" className="w-11 h-11" />
                        <p className="mt-2">Email</p>
                    </button>
                </div>
            </div>
        </>
    );
}
