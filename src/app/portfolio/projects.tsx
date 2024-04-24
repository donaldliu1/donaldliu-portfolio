import Project_temp from "./component/project_temp"

export default function Projects() {
    return (
        <>
            <div className="grid col-start-1 row-start-5 row-end-11 col-span-5 bg-purple-900 m-1.5 text-white p-3 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-between h-6">
                    <p className="text-xl font-medium h-6"> Projects</p>
                    <img src=""/>
                </div>
                <div className="grid grid-cols-3 gap-3 ">
                    <Project_temp name={"Website"} img={"logo1.png"} focus={"Tailwind, Next.js, Typescript"}/>
                    <Project_temp name={"Push & Pull"} img={"logo2.png"} focus={"RESTful API, Github Actions"}/>
                    <Project_temp name={"Guesser"} img={"logo3.png"} focus={"PostgreSQL, JavaScript, CSS"}/>
                </div>
            </div>
        </>
    )
}