import { useState } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import { mockLocations, mockShifts } from '../../../data/mockFormData';
import LocationModal from '../../../components/modals/LocationModal';
import { projectService } from '../../../services/projectService';
import swal from 'sweetalert';

export default function Form() {
    const [name, setName] = useState('');
    const [selectedSelections, setSelectedSelections] = useState({});
    const [activeLocation, setActiveLocation] = useState(null);

    const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    const handleCheckboxChange = (day, shiftId) => {
        setSelectedSelections(prev => {
            if (prev[day] === shiftId) {
                const copy = { ...prev };
                delete copy[day];
                return copy;
            }
            return {
                ...prev,
                [day]: shiftId
            };
        });
    };

    const getExactDateForDay = (dayName) => {
        const daysMap = { "Lunes": 1, "Martes": 2, "Miércoles": 3, "Jueves": 4, "Viernes": 5 };
        const targetDay = daysMap[dayName];
        
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const shiftsPayload = Object.entries(selectedSelections).map(([day, shiftId]) => {
            return {
                shift_id: shiftId,
                date: getExactDateForDay(day)
            };
        });

        const finalData = {
            name,
            needs_vest: false,
            selectedShifts: shiftsPayload
        };

        try {
            const response = await projectService.registerShift(finalData);
            swal("¡Éxito!", "¡Inscripción registrada con éxito!", "success");
            setName('');
            setSelectedSelections({});
        } catch (error) {
            console.error("Error al registrar en la BD:", error);
            swal("Oops...", "Hubo un error al registrar la inscripción.", "error");
        }
    };

    const getCurrentWeekRange = () => {
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

    return (
        <MainLayout>
            <div className='container form-container'>
                <h1 className='h1 my-4'>Espacios Educativos Saludables</h1>

                <div>
                    <span className='subtitle'>
                        Formulario de inscripción para los campamentos de verano. 
                    </span>

                    <span className='kudos d-block my-2 datetime'>Horario: 9:45 - 14:00</span>

                    <p className='quote my-4'>
                        ¿Eres nuev@? Antes de iniciar actividad, debes enviar el 
                        <strong> Certificado de Antecedentes de Delitos Sexuales </strong>
                        a marta.pavon@cruzroja.es.
                        <br />
                        Lo puedes solicitar de forma online
                        <a href='https://sede.mjusticia.gob.es/tramites/certificado-registro-central' className='link'>
                            aquí.
                        </a>
                        En caso de no tener Cl@ve o Certificado Digital, puedes solicitarlo
                        de forma presencial con Cita Previa 
                        <a href='https://cita-previa.mjusticia.gob.es/citaprevia/#!/es/newAppointment?uuid=020a-389cc-ea4d-fe060' className='link'>
                            aquí.
                        </a>
                    </p>
                </div>
                
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className='form-label fw-bold'>Nombre y apellido</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                name="name" 
                                id="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                        </div>

                        <div className="mb-4">
                            <label className='form-label fw-bold d-block mb-2'>Selecciona tus turnos por centro y día:</label>
                            
                            <span className='kudos d-block datetime my-2'>{getCurrentWeekRange()}</span>

                            <div className="table-responsive">
                                <table className="table table-custom">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '30%' }} className="py-3">Colegios</th>
                                            {daysOfWeek.map(day => (
                                                <th key={day} className="py-3">{day}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockLocations.map(location => (
                                            <tr key={location.id}>
                                                <td className="text-start">
                                                    <div className="d-flex justify-content-between align-items-center px-2">
                                                        <span>{location.name}</span>
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-sm btn-link text-dark p-0 border-0 shadow-none"
                                                            onClick={() => setActiveLocation(location)}
                                                            title="Ver información y ubicación"
                                                        >
                                                            <i className="bi bi-geo-alt-fill fs-5 text-danger"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                {daysOfWeek.map(day => {
                                                    const shift = mockShifts.find(s => s.location_id === location.id && s.day === day);
                                                    const isChecked = shift ? selectedSelections[day] === shift.id : false;

                                                    return (
                                                        <td key={day} className="align-middle">
                                                            {shift ? (
                                                                <div className="form-check d-flex justify-content-center">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        className="form-check-input" 
                                                                        style={{ transform: 'scale(1.3)', cursor: 'pointer' }}
                                                                        checked={isChecked}
                                                                        onChange={() => handleCheckboxChange(day, shift.id)}
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <span className="text-muted small text-center">-</span>
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <small className="text-muted d-block mt-1">
                                * Nota: Solo puedes seleccionar un centro por día. Si hubiera algún cambio en el cuadrante te lo haré saber.
                            </small>
                        </div>

                        <div className="text-end">
                            <button type="submit" className="btn btn-accent px-4 mb-4 fw-semibold">
                                Completar Inscripción
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <LocationModal location={activeLocation} onClose={() => setActiveLocation(null)} />
        </MainLayout>
    );
}