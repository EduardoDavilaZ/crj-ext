import ProjectForm from '../components/ProjectForm';
import config from './project.config';

export default function Form() {
    return (
        <>
            <ProjectForm
                slug={config.slug}
                projectTitle={config.projectTitle}
                {...config.form}
            />
        </>
    );
}
