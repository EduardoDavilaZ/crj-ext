import api from './api';

export const craftService = {

    getAgeRanges: async () => {
        try {
            const response = await api.get('/age-ranges');
            return response.data;
        } catch (error) {
            console.error('Error al cargar los rangos de edad', error);
            return [];
        }
    },

    getCrafts: async (ageRangeId = null) => {
        try {
            const params = {};

            if (ageRangeId) {
                params.age_range_id = ageRangeId;
            }

            const response = await api.get('/craft', {
                params
            });

            return response.data;

        } catch (error) {
            console.error('Error al cargar las manualidades', error);

            return {
                data: [],
                total: 0
            };
        }
    }
};