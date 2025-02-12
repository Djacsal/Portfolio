import Project from '../components/Project/Project';
import { projects } from '../helpers/projectsList';

const Projects = () => {
    return (  
        <main className="section">
            <div className="container">
                <h2 className="title-1">Мои проекты</h2>
                <ul className="projects">
                    {projects.map((project, index) => {
                        return <Project key={project.key} title={project.title} img={project.img} index={index} />
                    })}
                </ul>
            </div>
        </main>
    );
}
 
export default Projects;