import JobProps from "./component/job"

export default function Experience() {
    return (
        <>
            <div className="grid col-start-6 col-span-2 row-span-3 bg-purple-900 m-1.5 text-white p-3 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-between h-6">
                    <p className="text-xl font-medium "> WORK EXPERIENCE</p>
                    <img src=""/>
                </div>
                <JobProps title={"School of Code"} start={"Feb 2024"} end={"Present"}/>
                <JobProps title={"Vue"} start={"Nov 2019"} end={"Jan 2024"}/>
            </div>
        </>
    )
}