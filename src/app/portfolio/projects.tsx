"use client"
import React, { useState } from 'react';
import Project_temp from "./component/project_temp";
import Modal from './component/Modal';

interface Project {
    name: string;
    img: string;
    focus: string;
    url: string;  
}

export default function Projects() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project>({ name: '', img: '', focus: '', url: '' }); 
    const [spanVisibility, setSpanVisibility] = useState<{ [key: string]: boolean }>({
        "Website": true,
        "FGL": true,
        "PokePull": true
    });

    const handleButtonClick = (name: string, img: string, focus: string, url: string): void => {  
        setSelectedProject({ name, img, focus, url });  
        setIsModalVisible(true);
        setSpanVisibility((prev) => ({ ...prev, [name]: false }));
    };

    const handleClose = (): void => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="p-3 grid col-start-1 row-start-5 row-end-11 col-span-5 bg-purple-900 m-1.5 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-between h-6">
                    <p className="text-xl font-medium h-6">Projects</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <Project_temp 
                        name="Portfolio" 
                        img="logo1.png" 
                        focus="Tailwind, Next.js, TypeScript" 
                        isSpanVisible={spanVisibility["Website"]}
                        onClick={() => handleButtonClick("Portfolio", "logo1.png", "This is a passion project for my online portfolio, starting from complete scratch, my main focus of this project is to learn Tailwind and refine my Typescript while using Next.js, JavaScript and HTML. The purpose of this website is to hopefully give an insight into who I am and have an area where I can tinker and play with code!", "https://www.donaldliu.social/")}
                    />
                    <Project_temp 
                        name="FGL" 
                        img="logo2.png" 
                        focus="Shopify, CI/CD, TypeScript" 
                        isSpanVisible={spanVisibility["FGL"]}
                        onClick={() => handleButtonClick("Fauna Green Living", "logo2.png", "For my final project for School of Code we was given a real stakeholder who wanted their e-commerce website to be completely revamped as it was not fit for purpose and had poor UI/UX. The time frame was 4 weeks and within that time we was able to make a custom front-end, greater SEO and a shopify backend for product management.", "https://www.faunagreenliving.com/")}
                    />
                    <Project_temp 
                        name="PokePull" 
                        img="logo3.png" 
                        focus="RESTful API, MongoDB, Mongoose" 
                        isSpanVisible={spanVisibility["PokePull"]}
                        onClick={() => handleButtonClick("PokePull", "logo3.png", "Passion project to learn more about interacting with RESTful API, MongoDB and Mongoose. I am a big fan of gacha and love the randomness of it combined with my love for Pokemon card packs, the project is to simulate opening a random card pack while also providing users to view their inventory and upgrading cards they have pulled.", "https://github.com/donaldliu1/PokePull")}
                    />
                </div>
            </div>
            {isModalVisible && (
                <Modal onClose={handleClose}>
                <div className="p-4 max-h-screen overflow-y-auto flex justify-center items-center flex-col">
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700"> 
                        <h1 className="text-3xl mb-4 text-center cursor-pointer">{selectedProject.name}</h1>
                    </a>
                    <img src={selectedProject.img} alt={selectedProject.name} className="mb-4 h-[50%] w-[50%]" />
                    <p className="text-lg text-center">{selectedProject.focus}</p>
                </div>
            </Modal>
            )}
        </>
    );
}
