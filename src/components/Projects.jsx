import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectScheduleModal from './modals/ProjectScheduleModal';
import { projectService } from '../services/projectService';
import catLoader from '../assets/cat-loader.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProjectModal, setSelectedProjectModal] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });

        projectService.getProjects() 
            .then((data) => {
                setProjects(data);
                setLoading(false);
                setTimeout(() => {
                    AOS.refresh();
                }, 100);
            })
            .catch((error) => {
                console.error("Error cargando proyectos:", error);
                setLoading(false); 
            });
    }, []);

    useEffect(() => {
        const cuadranteParam = searchParams.get('cuadrante');
        if (cuadranteParam && projects.length > 0) {
            const foundProject = projects.find((p) => String(p.id) === cuadranteParam && p.is_active);
            if (foundProject) {
                setSelectedProjectModal(foundProject);
            }
        }
    }, [searchParams, projects]);

    const handleOpenModal = (project) => {
        setSearchParams({ cuadrante: project.id });
        setSelectedProjectModal(project);
    };

    const handleCloseModal = () => {
        setSelectedProjectModal(null);
        if (searchParams.has('cuadrante')) {
            searchParams.delete('cuadrante');
            setSearchParams(searchParams);
        }
    };

    if (loading) {
        return (
            <div className="center loader">
                <img src={catLoader} alt="Cargando proyectos..." />
            </div>
        );
    }

    const activeProjects = projects.filter((project) => project.is_active);
    const upcomingProjects = projects.filter((project) => !project.is_active);

    return (
        <div className="container p-0">
            <h2 className="mt-5 fw-bold text-dark">Proyectos <span className='c-accent'>Activos</span></h2>
            <p className="text-muted mb-4">Elige un proyecto en el que quieras participar y únete al cambio.</p>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {activeProjects.map((project, index) => (
                    <div 
                        className="col" 
                        key={project.id}
                        data-aos="fade-left"
                        data-aos-delay={index * 100}
                    >
                        <ProjectCard 
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            slug={project.slug}
                            link={`/proyecto/${project.slug}`}
                            formLink={`/apuntarme/${project.slug}`}
                            shifts={project.shifts}
                            isActive={project.is_active}
                            onOpenModal={() => handleOpenModal(project)}
                        />
                    </div>
                ))}
            </div>

            <h2 className="mt-5 fw-bold text-dark"><span className='c-accent'>Próximos</span> Proyectos</h2>
            <p className="text-muted mb-4">Proyectos especiales que realizamos a lo largo del año. ¡Mantente atento a las próximas fechas de inscripción!</p>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {upcomingProjects.map((project, index) => (
                    <div 
                        className="col" 
                        key={project.id}
                        data-aos="fade-left"
                        data-aos-delay={index * 100}
                    >
                        <ProjectCard 
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            slug={project.slug}
                            link={`/proyecto/${project.slug}`}
                            formLink={`/apuntarme/${project.slug}`}
                            shifts={project.shifts}
                            isActive={project.is_active}
                            onOpenModal={() => handleOpenModal(project)}
                        />
                    </div>
                ))}
            </div>

            <ProjectScheduleModal 
                show={Boolean(selectedProjectModal)}
                onClose={handleCloseModal}
                projectId={selectedProjectModal?.id}
                projectTitle={selectedProjectModal?.title}
                project={selectedProjectModal}
            />
        </div>
    );
}