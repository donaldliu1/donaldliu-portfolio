"use client"
import React, { useState } from 'react';
import SkillProps from "./component/skill";
import Modal from './component/Modal';

type SkillCategory = 'Frontend' | 'Backend' | 'Deployment CI/CD' | 'Testing' | 'DevOps' | 'Other';

const skillDetails: Record<SkillCategory, string[]> = {
    Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    Backend: ["Node.js", "Express", "PostgreSQL", "Supabase"],
    "Deployment CI/CD": ["Vercel", "ESLint", "Snyk"],
    Testing: ["Playwright", "Vitest", "Postman", "Zod"],
    DevOps: ["AWS", "Docker"],
    Other: ["Agile", "Figma", "Shopify", "GitHub"]
};

export default function Skills() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState<{ catergory: SkillCategory, skills: string[] }>({ catergory: 'Frontend', skills: [] });
    const [spanVisibility, setSpanVisibility] = useState<Record<SkillCategory, boolean>>({
        Frontend: true,
        Backend: true,
        'Deployment CI/CD': true,
        Testing: true,
        DevOps: true,
        Other: true
    });

    const handleButtonClick = (catergory: SkillCategory) => {
        setSelectedSkill({ catergory, skills: skillDetails[catergory] });
        setIsModalVisible(true);
        setSpanVisibility((prev) => ({ ...prev, [catergory]: false }));
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="col-span-2 row-span-7 bg-purple-900 m-1.5 text-white p-3 border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-between h-6">
                    <p className="text-xl font-medium h-6 text-decoration-line: underline underline-offset-4">Skills</p>
                </div>
                <div className="mt-2 grid grid-cols-1 grid-rows-6 h-full">
                    {Object.keys(skillDetails).map((catergory) => (
                        <SkillProps 
                            key={catergory}
                            catergory={catergory as SkillCategory} 
                            isSpanVisible={spanVisibility[catergory as SkillCategory]}
                            onClick={() => handleButtonClick(catergory as SkillCategory)}
                        />
                    ))}
                </div>
            </div>
            {isModalVisible && (
                <Modal onClose={handleClose}>
                    <div className="p-4">
                        <h1 className="text-3xl mb-4 underline">{selectedSkill.catergory}</h1>
                        <ul>
                            {selectedSkill.skills.map((skill) => (
                                <li key={skill} className="text-lg">{skill}</li>
                            ))}
                        </ul>
                    </div>
                </Modal>
            )}
        </>
    );
}
