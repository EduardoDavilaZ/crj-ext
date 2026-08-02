export const validateName = (name) => {
    if (!name || !name.trim()) {
        return "Acho, rellena tu nombre y apellido porfa!";
    }
    if (name.trim().length < 3) {
        return "Con ese nombre tan corto solo puedes ser agente secreto o un gato. Pon tu nombre real, anda.";
    }
    return "";
};

export const validateSelections = (selectedSelections) => {
    const count = Array.isArray(selectedSelections) 
        ? selectedSelections.length 
        : Object.values(selectedSelections).length;

    if (count === 0) {
        return "¡Venga ya! No me dejes con la plantilla vacía, marca al menos un turno porfa!";
    }
    return "";
};