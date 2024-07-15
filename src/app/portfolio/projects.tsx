"use client"
import React, { useState } from 'react';
import Project_temp from "./component/project_temp";
import Modal from './component/Modal';

interface Project {
    name: string;
    img: string;
    focus: string;
}

export default function Projects() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project>({ name: '', img: '', focus: '' });
    const [spanVisibility, setSpanVisibility] = useState<{ [key: string]: boolean }>({
        "Website": true,
        "FGL": true,
        "PokePull": true
    });

    const handleButtonClick = (name: string, img: string, focus: string): void => {
        setSelectedProject({ name, img, focus });
        setIsModalVisible(true);
        setSpanVisibility((prev) => ({ ...prev, [name]: false }));
    };

    const handleClose = (): void => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className=" p-3 grid col-start-1 row-start-5 row-end-11 col-span-5 bg-purple-900 m-1.5 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-between h-6">
                    <p className="text-xl font-medium h-6">Projects</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <Project_temp 
                        name="Website" 
                        img="logo1.png" 
                        focus="Tailwind, Next.js, TypeScript" 
                        isSpanVisible={spanVisibility["Website"]}
                        onClick={() => handleButtonClick("Website", "logo1.png", "Tailwind, Next.js, TypeScript")}
                    />
                    <Project_temp 
                        name="FGL" 
                        img="logo2.png" 
                        focus="Shopify, CI/CD, TypeScript" 
                        isSpanVisible={spanVisibility["FGL"]}
                        onClick={() => handleButtonClick("FGL", "logo2.png", "Shopify, CI/CD, TypeScript")}
                    />
                    <Project_temp 
                        name="PokePull" 
                        img="logo3.png" 
                        focus="RESTful API, MongoDB, Mongoose" 
                        isSpanVisible={spanVisibility["PokePull"]}
                        onClick={() => handleButtonClick("PokePull", "logo3.png", "RESTful API, MongoDB, Mongoose")}
                    />
                </div>
            </div>
            {isModalVisible && (
                <Modal onClose={handleClose}>
                    <div className="p-4">
                        <h1 className="text-3xl mb-4">{selectedProject.name}</h1>
                        <img src={selectedProject.img} alt={selectedProject.name} className="mb-4" />
                        <p className="text-lg">{selectedProject.focus}</p>
                    </div>
                </Modal>
            )}
        </>
    );
}
