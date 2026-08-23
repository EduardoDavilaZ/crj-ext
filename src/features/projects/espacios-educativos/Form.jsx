import ProjectForm from '../components/ProjectForm';
import FormInstructions from './FormInstructions';
import config from './project.config';
import SEO from '../../../components/SEO';

export default function Form() {
    return (
        <>
            <SEO
                title="Inscripción a los Espacios Educativos Saludables"
                description="Formulario de inscripción para participar en los Espacios Educativos Saludables."
                canonical="https://crj-ext.vercel.app/apuntarme/espacios-educativos"
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
