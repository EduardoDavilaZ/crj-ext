import ProjectForm from '../components/ProjectForm';
import FormInstructions from './FormInstructions';
import config from './project.config';
import SEO from '../../../components/SEO';

export default function Form() {
    return (
        <>
            <ProjectForm
                slug={config.slug}
                projectTitle={config.projectTitle}
                {...config.form}
                instructions={<FormInstructions />}
            />
        </>
    );
}
