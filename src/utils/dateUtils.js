// src/utils/dateUtils.js

export const getExactDateForDay = (dayParam) => {
    // Si ya viene en formato de fecha (YYYY-MM-DD), lo devolvemos directamente
    if (dayParam && /^\d{4}-\d{2}-\d{2}$/.test(dayParam)) {
        return dayParam;
    }

    const daysMap = { 
        "Lunes": 1, "Martes": 2, "Miércoles": 3, "Miercoles": 3, "Jueves": 4, "Viernes": 5 
    };
    
    const targetDay = daysMap[dayParam];
    
    // Fallback de seguridad por si el día viene mal o nulo para evitar que rompa la app
    if (!targetDay) {
        return new Date().toISOString().split('T')[0];
    }
    
    const now = new Date();
    const currentDayOfWeek = now.getDay();
    const currentHour = now.getHours();
    
    const monday = new Date(now);
    const isNextWeek = (currentDayOfWeek === 5 && currentHour >= 12) || currentDayOfWeek === 6 || currentDayOfWeek === 0;
    const dayOfWeekNormalized = currentDayOfWeek === 0 ? 7 : currentDayOfWeek;
    
    monday.setDate(now.getDate() - dayOfWeekNormalized + 1);

    if (isNextWeek) {
        monday.setDate(monday.getDate() + 7);
    }
    
    const targetDate = new Date(monday);
    targetDate.setDate(monday.getDate() + (targetDay - 1));
    
    return targetDate.toISOString().split('T')[0];
};

export const getCurrentWeekRange = () => {
    const now = new Date();
    const currentDayOfWeek = now.getDay();
    const currentHour = now.getHours();
    
    const isNextWeek = (currentDayOfWeek === 5 && currentHour >= 12) || currentDayOfWeek === 6 || currentDayOfWeek === 0;
    const distanceToMonday = currentDayOfWeek === 0 ? -6 : 1 - currentDayOfWeek;
    const monday = new Date(now);
    monday.setDate(now.getDate() + distanceToMonday);

    if (isNextWeek) {
        monday.setDate(monday.getDate() + 7);
    }

    const friday = new Date(monday);
    friday.setDate(monday.getDate() + 4);

    const options = { day: '2-digit', month: '2-digit' };
    return `Semana del ${monday.toLocaleDateString('es-ES', options)} al ${friday.toLocaleDateString('es-ES', options)}`;
};