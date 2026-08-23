import ProjectInfoPage from '../components/ProjectInfoPage';
import config from './project.config';

export default function InfoPage() {
    return (
        <ProjectInfoPage 
            slug={config.slug}
            {...config.info}
        />
    );
}
