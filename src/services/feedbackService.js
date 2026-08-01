import api from './api';

export const feedbackService = {
    sendFeedback: async (data) => {
        try {
            const response = await api.post('/feedback', data);
            return response.data;
        } catch (error) {
            console.error("Error al enviar el comentario anónimo", error);
            throw error;
        }
    },

    getFeedbackByCode: async (code) => {
        try {
            const response = await api.get(`/feedback/${code}`)
            return response.data;
        } catch (error) {
            console.error("Error al consultar el código de feedback", error);
            throw error;
        }
    }
};