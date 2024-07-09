import SkillProps from "./component/skill"

export default function Skills() {
    return (
        <>
            <div className="col-span-2 row-span-7 bg-purple-900 m-1.5 text-white p-3 text-white border-transparent border-2 rounded-md hover:border-white transition duration-500">
                <div className="flex justify-between h-6">
                    <p className="text-xl font-medium h-6"> Skills</p>
                    <img src=""/>
                </div>
                <div className="mt-2 grid grid-cols-1 grid-rows-6 h-full">
                    <SkillProps catergory={"Frontend"}/>
                    <SkillProps catergory={"Backend"}/>
                    <SkillProps catergory={"Deployment CI/CD"}/>
                    <SkillProps catergory={"Testing"}/>
                    <SkillProps catergory={"DevOps"}/>
                    <SkillProps catergory={"Other"}/>
                </div>
            </div>
        </>
    )
}