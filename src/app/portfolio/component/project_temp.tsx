interface ProjectProps {
    name: string
    img: string
}

const Project_temp: React.FC<ProjectProps> = ({ name, img }) => {
    return (
    <button className="border flex flex-col justify-between">
        <div className="place-self-center"><p>{name}</p></div>
        <div>
            <img src={img} alt={name}/>
        </div>
    </button>
    );
}

export default Project_temp