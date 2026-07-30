import projectsData from '../data/projects.json';

export async function getProjects() {
    // Simulamos un pequeño retraso de red con una promesa (opcional, pero realista)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projectsData);
        }, 100);
    });
}