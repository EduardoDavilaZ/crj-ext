// src/hooks/useProjectForm.js
import { useState, useEffect } from 'react';
import { projectService } from '../services/projectService';
import { getExactDateForDay } from '../utils/dateUtils';
import swal from 'sweetalert';
import SuccessModal from '../components/modals/SuccessModal';

export function useProjectForm(defaultSlug, defaultTitle) {
    const [name, setName] = useState('');
    const [projectTitle, setProjectTitle] = useState(defaultTitle);
    const [selectedSelections, setSelectedSelections] = useState({});
    const [activeLocation, setActiveLocation] = useState(null);
    const [locations, setLocations] = useState([]);
    const [shifts, setShifts] = useState([]);
    const [loading, setLoading] = useState(true); // <--- NUEVO ESTADO DE CARGA
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        const fetchProjectData = async () => {
            setLoading(true); // Empieza a cargar
            try {
                const projects = await projectService.getProjects();
                const currentProject = projects.find(p => p.slug === defaultSlug || (p.id && p.id.toString() === defaultSlug));

                if (currentProject) {
                    setProjectTitle(currentProject.title);
                    const locationsData = await projectService.getShiftsByProject(currentProject.id);
                    setLocations(locationsData);
                    
                    const allShifts = locationsData.flatMap(loc => loc.shifts || []);
                    setShifts(allShifts);
                } else {
                    swal("Atención", "No se encontró el proyecto especificado.", "warning");
                }
            } catch (error) {
                console.error("Error al cargar los datos de la API:", error);
                swal("Error", "No se pudieron cargar los centros y turnos.", "error");
            } finally {
                setLoading(false); // Termina de cargar (tanto si va bien como si falla)
            }
        };

        fetchProjectData();
    }, [defaultSlug]);

    const handleCheckboxChange = (dayKey, shiftId, slot) => {
        const slotKey = slot ? `${dayKey}_${slot.start}-${slot.end}` : dayKey;

        setSelectedSelections(prev => {
            const copy = { ...prev };
            if (copy[slotKey] === shiftId) {
                delete copy[slotKey];
                return copy;
            }
            Object.keys(copy).forEach(key => {
                if (key === slotKey) {
                    delete copy[key];
                }
            });
            return { ...copy, [slotKey]: shiftId };
        });
    };

    const handleSubmit = async (e, customPayloadConfig = {}) => {
        e.preventDefault();
        
        const shiftsPayload = Object.values(selectedSelections).map((shiftId) => {
            const shiftObj = shifts.find(s => s.id === shiftId);
            return {
                shift_id: shiftId,
                date: getExactDateForDay(shiftObj?.day || shiftObj?.date)
            };
        });

        const finalData = {
            name,
            needs_vest: false,
            ...customPayloadConfig,
            selectedShifts: shiftsPayload
        };

        try {
            await projectService.registerShift(finalData);
            setShowSuccessModal(true);
            setName('');
            setSelectedSelections({});
        } catch (error) {
            console.error("Error al registrar en la BD:", error);
            swal("Oops...", "Hubo un error al registrar la inscripción.", "error");
        }
    };

    return {
        name,
        setName,
        projectTitle,
        selectedSelections,
        activeLocation,
        setActiveLocation,
        locations,
        shifts,
        loading, // <--- EXPORTAMOS EL LOADING AQUÍ
        showSuccessModal,      // <--- AÑADE ESTO
        setShowSuccessModal,   // <--- AÑADE ESTO
        handleCheckboxChange,
        handleSubmit
    };
}