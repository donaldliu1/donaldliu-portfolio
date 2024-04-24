export default function NavBar() {
    return (
        <>
        <div className="h-[45px] w-full bg-red-400">
            <div className="flex flex-wrap justify-center text-center">
                <div className="transform transition duration-500 hover:scale-110 p-2 text-white">
                    <p>Portfolio</p>
                </div>
                <div className="transform transition duration-500 hover:scale-110 p-2 text-white">
                    <p>Push & Pull</p>
                </div>
                <div className="transform transition duration-500 hover:scale-110 p-2 text-white">
                    <p>Guesser</p>
                </div>
                <div className="transform transition duration-500 hover:scale-110 p-2 text-white">
                    <p>Mini-projects</p>
                </div>
            </div>
        </div>
        </>
    )
}