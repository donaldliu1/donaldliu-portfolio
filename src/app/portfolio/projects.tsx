"use client"
import React, { useState } from 'react';
import Project_temp from "./component/project_temp";
import Modal from './component/Modal';

export default function Projects() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState({ name: '', img: '', focus: '' });

    const handleButtonClick = (name, img, focus) => {
        setSelectedProject({ name, img, focus });
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className=" p-3 grid col-start-1 row-start-5 row-end-11 col-span-5 bg-purple-900 m-1.5 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-between h-6">
                    <p className="text-xl font-medium h-6">Projects</p>
                    <img src=""/>
                </div>
                <div className="grid grid-cols-3 gap-3 ">
                    <Project_temp 
                        name="Website" 
                        img="logo1.png" 
                        focus="Tailwind, Next.js, TypeScript" 
                        onClick={() => handleButtonClick("Website", "logo1.png", "Tailwind, Next.js, TypeScript")}
                    />
                    <Project_temp 
                        name="FGL" 
                        img="logo2.png" 
                        focus="Shopify, CI/CD, TypeScript" 
                        onClick={() => handleButtonClick("FGL", "logo2.png", "Shopify, CI/CD, TypeScript")}
                    />
                    <Project_temp 
                        name="PokePull" 
                        img="logo3.png" 
                        focus="RESTful API, MongoDB, Mongoose" 
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
