import ProjectForm from '../components/ProjectForm';
import config from './project.config';

export default function Form() {
    return (
        <>
            <SEO
                title="Inscripción a Infancia Hospitalizada"
                description="Formulario de inscripción para participar en Infancia Hospitalizada."
                canonical="https://crj-ext.vercel.app/apuntarme/infancia-hospitalizada"
                noIndex={true}
            />

            <ProjectForm
                slug={config.slug}
                projectTitle={config.projectTitle}
                {...config.form}
                instructions={<FormInstructions />}
            />
        </>
    );
}
