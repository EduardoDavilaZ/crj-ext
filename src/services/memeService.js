import api from './api';

export const memeService = {
    getMemes: async (page = 1) => {
        try {
            const response = await api.get(`/memes?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error al cargar los memes", error);
            return { data: [], last_page: 1 };
        }
    }
};