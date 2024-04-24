import Project_temp from "./component/project_temp"

export default function Projects() {
    return (
        <>
            <div className="grid col-start-1 row-start-5 row-end-11 col-span-5  border-solid border-2 border-black rounded-md bg-purple-900 m-1.5 text-white p-3">
                <p className="text-xl font-medium"> Projects</p>
                <div className="grid grid-cols-3 gap-3 ">
                    <Project_temp name={"Website"} img={"logo1.png"}/>
                    <Project_temp name={"Push & Pull"} img={"logo2.png"}/>
                    <Project_temp name={"Guesser"} img={"logo3.png"}/>
                </div>
            </div>
        </>
    )
}