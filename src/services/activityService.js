import api from './api';

export const activityService = {

    getAgeRanges: async () => {
        try {
            const response = await api.get('/age-ranges');

            return response.data;
        } catch (error) {
            console.error('Error al cargar los rangos de edad', error);

            return [];
        }
    },

    getActivityTypes: async () => {
        try {
            const response = await api.get('/activity-types');

            return response.data;
        } catch (error) {
            console.error('Error al cargar los tipos de actividad', error);

            return [];
        }
    },

    getActivities: async (ageRangeId = null, activityTypeId = null) => {
        try {
            const params = {};

            if (ageRangeId) {
                params.age_range_id = ageRangeId;
            }

            if (activityTypeId) {
                params.activity_type_id = activityTypeId;
            }

            const response = await api.get('/activity', {
                params
            });

            return response.data;
        } catch (error) {
            console.error('Error al cargar las actividades', error);

            return {
                data: [],
                total: 0
            };
        }
    }
};