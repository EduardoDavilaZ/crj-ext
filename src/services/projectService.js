import api from './api';

export const projectService = {
    getProjects: async () => {
        try {
            const response = await api.get('/get-projects-with-shifts');
            return response.data;
        } catch (error) {
            console.error("Error al obtener los proyectos con turnos", error);
            throw error;
        }
    },

    getLocationsByProject: async (projectId) => {
        try {
            const response = await api.get(`/project/${projectId}/location`);
            return response.data;
        } catch (error) {
            console.error("Error al obtener ubicaciones del proyecto", error);
            throw error;
        }
    },

    registerShift: async (data) => {
        try {
            const response = await api.post('/register-shift', data);
            return response.data;
        } catch (error) {
            console.error("Error al registrar el turno", error);
            throw error;
        }
    },

    getShiftsByProject: async (projectId) => {
        try {
            const response = await api.get(`/project/${projectId}/shifts`);
            return response.data;
        } catch (error) {
            console.error("Error al obtener los turnos y ubicaciones del proyecto", error);
            throw error;
        }
    }
};