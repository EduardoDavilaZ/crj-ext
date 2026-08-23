import ProjectForm from '../components/ProjectForm';
import config from './project.config';

export default function Form() {
    return (
        <>
            <SEO
                title="Inscripción al ESIE"
                description="Formulario de inscripción para participar en el ESIE."
                canonical="https://crj-ext.vercel.app/apuntarme/esie"
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
