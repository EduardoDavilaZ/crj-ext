import ProjectForm from '../components/ProjectForm';
import config from './project.config';

export default function Form() {

    return (
        <>
            <SEO
                title="Inscripción a API/PROMO"
                description="Formulario de inscripción para participar en Promoción del Éxito Escolar."
                canonical="https://crj-ext.vercel.app/apuntarme/exito-escolar"
                noIndex={true}
            />
        
            <ProjectForm
                slug={config.slug}
                projectTitle={config.projectTitle}
                {...config.form}
                shiftLabel={
                    <>
                        Apúntate aquí abajo <i className="bi bi-pen"></i>:
                    </>
                }
            />
        </>
    );
}
