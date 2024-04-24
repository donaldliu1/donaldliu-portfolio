interface ProjectProps {
    name: string
    img: string
}

const Project_temp: React.FC<ProjectProps> = ({ name, img }) => {
    return (
    <div>
        <div><p>{name}</p></div>
        <div>
            <img src={img} alt={name} width={100} height={100}/>
        </div>
    </div>
    );
}

export default Project_temp