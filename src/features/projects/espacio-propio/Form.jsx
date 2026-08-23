import ProjectForm from '../components/ProjectForm';
import config from './project.config';

export default function Form() {
    return (
        <>
            <SEO
                title="Inscripción a Espacio Propio"
                description="Formulario de inscripción para participar en Espacio Propio."
                canonical="https://crj-ext.vercel.app/apuntarme/espacio-propio"
                noIndex={true}
            />
        
            <ProjectForm 
                slug={config.slug} 
                projectTitle={config.projectTitle} 
                {...config.form} 
            />
        </>
    );
}
