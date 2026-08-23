import ProjectForm from '../components/ProjectForm';
import config from './project.config';

export default function Form() {
    return (
        <>
            <SEO
                title="Inscripción al No Te Pases"
                description="Formulario de inscripción para participar en el No Te Pases."
                canonical="https://crj-ext.vercel.app/apuntarme/no-te-pases"
                noIndex={true}
            />

            <ProjectForm
                slug={config.slug}
                projectTitle={config.projectTitle}
                {...config.form}
            />
        </>
    );

    return <ProjectForm slug={config.slug} projectTitle={config.projectTitle} {...config.form} />;
}
