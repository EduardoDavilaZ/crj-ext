import ProjectForm from '../components/ProjectForm';
import config from './project.config';

export default function Form() {
    return (
        <>
            <SEO
                title="Inscripción a El Juguete Educativo"
                description="Formulario de inscripción para participar en El Juguete Educativo."
                canonical="https://crj-ext.vercel.app/apuntarme/juguete-educativo"
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
