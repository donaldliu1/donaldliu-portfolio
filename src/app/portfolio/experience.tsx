"use client"
import React, { useState } from 'react';
import JobProps from "./component/job";
import Modal from './component/Modal';

interface Job {
    title: string;
    start: string;
    end: string;
}

export default function Experience() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<Job>({ title: '', start: '', end: '' });
    const [spanVisibility, setSpanVisibility] = useState<{ [key: string]: boolean }>({
        "School of Code": true,
        "Vue": true
    });

    const handleButtonClick = (title: string, start: string, end: string): void => {
        setSelectedJob({ title, start, end });
        setIsModalVisible(true);
        setSpanVisibility((prev) => ({ ...prev, [title]: false }));
    };

    const handleClose = (): void => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="grid col-start-6 col-span-2 row-span-3 bg-purple-900 m-1.5 text-white p-3 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-between h-6">
                    <p className="text-xl font-medium ">WORK EXPERIENCE</p>
                    <img src=""/>
                </div>
                <JobProps 
                    title="School of Code" 
                    start="Feb 2024" 
                    end="Present" 
                    isSpanVisible={spanVisibility["School of Code"]}
                    onClick={() => handleButtonClick("School of Code", "Feb 2024", "Present")}
                />
                <JobProps 
                    title="Vue" 
                    start="Nov 2019" 
                    end="Jan 2024" 
                    isSpanVisible={spanVisibility["Vue"]}
                    onClick={() => handleButtonClick("Vue", "Nov 2019", "Jan 2024")}
                />
            </div>
            {isModalVisible && (
                <Modal onClose={handleClose}>
                    <div className="p-4">
                        <h1 className="text-3xl mb-4">{selectedJob.title}</h1>
                        <p className="text-lg">{selectedJob.start} - {selectedJob.end}</p>
                    </div>
                </Modal>
            )}
        </>
    );
}
