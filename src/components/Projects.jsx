import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projectService } from '../services/projectService';
import catLoader from '../assets/cat-loader.gif'; // <--- Importas el GIF

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        projectService.getProjects() 
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error cargando proyectos:", error);
                setLoading(false); 
            });
    }, []);

    if (loading) {
        return (
            <div className="center loader">
                <img 
                    src={catLoader}
                    alt="Cargando proyectos..."
                />
            </div>
        );
    }

    return (
        <div className="container my-5 p-0">
            <h2 className="mb-2 fw-bold text-dark">Proyectos Activos</h2>
            <p className="text-muted mb-4">Elige un proyecto en el que quieras participar y únete al cambio.</p>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {projects.map((project) => (
                    <div className="col" key={project.id}>
                        <ProjectCard 
                            title={project.title}
                            description={project.description}
                            slug={project.slug}
                            link={`/proyecto/${project.slug}`}
                            formLink={`/apuntarme/${project.slug}`}
                            shifts={project.shifts}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}