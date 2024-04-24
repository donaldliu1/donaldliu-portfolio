export default function NavBar() {
    return (
        <>
        <div className="h-[45px] w-full border-b-2">
            <div className="flex flex-wrap justify-center text-center">
                <button className="transform transition duration-500 hover:scale-110 p-2 text-white flex flex-col item-center">
                    <p>Portfolio</p>
                    <img src="" className="mx-auto pt-5"/>
                </button>
                <button className="transform transition duration-500 hover:scale-110 p-2 text-white">
                    <p>Push & Pull</p>
                    <img src="" className="mx-auto pt-5"/>
                </button>
                <button className="transform transition duration-500 hover:scale-110 p-2 text-white">
                    <p>Guesser</p>
                    <img src="" className="mx-auto pt-5"/>
                </button>
                <button className="transform transition duration-500 hover:scale-110 p-2 text-white">
                    <p>Mini-projects</p>
                    <img src="" className="mx-auto pt-5" />
                </button>
            </div>
        </div>
        </>
    )
}