"use client"
import React, { useState } from 'react';
import SkillProps from "./component/skill";
import Modal from './component/Modal';

export default function Skills() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState({ catergory: '' });
    const [spanVisibility, setSpanVisibility] = useState({
        Frontend: true,
        Backend: true,
        'Deployment CI/CD': true,
        Testing: true,
        DevOps: true,
        Other: true
    });

    const handleButtonClick = (catergory) => {
        setSelectedSkill({ catergory });
        setIsModalVisible(true);
        setSpanVisibility((prev) => ({ ...prev, [catergory]: false }));
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="col-span-2 row-span-7 bg-purple-900 m-1.5 text-white p-3 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-between h-6">
                    <p className="text-xl font-medium h-6 text-decoration-line: underline underline-offset-4">Skills</p>
                    <img src=""/>
                </div>
                <div className="mt-2 grid grid-cols-1 grid-rows-6 h-full">
                    <SkillProps 
                        catergory="Frontend" 
                        isSpanVisible={spanVisibility.Frontend}
                        onClick={() => handleButtonClick("Frontend")}
                    />
                    <SkillProps 
                        catergory="Backend" 
                        isSpanVisible={spanVisibility.Backend}
                        onClick={() => handleButtonClick("Backend")}
                    />
                    <SkillProps 
                        catergory="Deployment CI/CD" 
                        isSpanVisible={spanVisibility['Deployment CI/CD']}
                        onClick={() => handleButtonClick("Deployment CI/CD")}
                    />
                    <SkillProps 
                        catergory="Testing" 
                        isSpanVisible={spanVisibility.Testing}
                        onClick={() => handleButtonClick("Testing")}
                    />
                    <SkillProps 
                        catergory="DevOps" 
                        isSpanVisible={spanVisibility.DevOps}
                        onClick={() => handleButtonClick("DevOps")}
                    />
                    <SkillProps 
                        catergory="Other" 
                        isSpanVisible={spanVisibility.Other}
                        onClick={() => handleButtonClick("Other")}
                    />
                </div>
            </div>
            {isModalVisible && (
                <Modal onClose={handleClose}>
                    <div className="p-4">
                        <h1 className="text-3xl mb-4">{selectedSkill.catergory}</h1>
                    </div>
                </Modal>
            )}
        </>
    );
}
