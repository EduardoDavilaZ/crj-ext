import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../../layouts/MainLayout';
import LocationModal from '../../../components/modals/LocationModal';
import ProjectShiftSection from '../../../components/forms/ProjectShiftSection';
import { useProjectForm } from '../../../hooks/useProjectForm';
import { getCurrentWeekRange } from '../../../utils/dateUtils';
import SuccessModal from '../../../components/modals/SuccessModal';
import { validateName, validateSelections } from '../../../utils/validators';

export default function Form() {
    const { slug } = useParams();

    const [needsVest, setNeedsVest] = useState(false);
    const [errors, setErrors] = useState({});

    const {
        name,
        setName,
        projectTitle,
        selectedSelections,
        activeLocation,
        setActiveLocation,
        locations,
        shifts,
        loading,
        isSubmitting,
        showSuccessModal,   
        setShowSuccessModal,
        handleCheckboxChange,
        handleSubmit: submitFormAction
    } = useProjectForm(slug || "esie", "ESIE");

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameError = validateName(name);
        const selectionError = validateSelections(selectedSelections);

        const newErrors = {
            name: nameError,
            shifts: selectionError
        };

        setErrors(newErrors);

        if (nameError || selectionError) {
            return;
        }

        submitFormAction(e, { needs_vest: needsVest });
    };

    return (
        <MainLayout>
            <div className='container form-container'>
                <h1 className='h1 my-4'>{projectTitle}</h1>

                <div>
                    <span className='subtitle'>
                        Inscríbete para colaborar en los Equipos de Sensibilización e Información ante Emergencias.
                    </span>
                    <span className='kudos d-block my-2 datetime'>
                        Turno mañana: 10:00 - 14:00 <br />
                        Turno mañana: 16:00 - 20:00
                    </span>
                </div>
                
                <form onSubmit={handleSubmit} noValidate>
                    <div className="my-2">
                        <label htmlFor="name" className='form-label fw-bold my-2'>Nombre y apellido</label>
                        <input 
                            type="text" 
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                            id="name" 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) setErrors({ ...errors, name: '' });
                            }} 
                        />
                        {errors.name && <div className="error mt-1">{errors.name}</div>}
                    </div>

                    <ProjectShiftSection 
                        loading={loading}
                        shifts={shifts}
                        locations={locations}
                        selectedSelections={selectedSelections}
                        handleCheckboxChange={(dayKey, shiftId, slot) => {
                            handleCheckboxChange(dayKey, shiftId, slot);
                            if (errors.shifts) setErrors({ ...errors, shifts: '' });
                        }}
                        setActiveLocation={setActiveLocation}
                        extraContent={
                            <>
                                <label className='form-label fw-bold d-block mb-2'>Selecciona tus turnos por centro y día:</label>
                                <span className='kudos d-block datetime my-2'>{getCurrentWeekRange()}</span>
                                {errors.shifts && <div className="error mt-1">{errors.shifts}</div>}
                            </>
                        }
                    />

                    <div className="my-4 form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            name="needs_vest" 
                            id="needs_vest"
                            checked={needsVest}
                            onChange={(e) => setNeedsVest(e.target.checked)}
                        />
                        <label htmlFor="needs_vest" className='form-check-label fw-bold'>¿Te hace falta chaleco?</label>
                    </div>

                    <div className="text-end">
                        <button type="submit" className="btn btn-accent px-4 mb-4 fw-semibold">
                            Completar Inscripción
                        </button>
                    </div>
                </form>

                <SuccessModal 
                    show={showSuccessModal} 
                    onClose={() => setShowSuccessModal(false)} 
                />
            </div>

            <LocationModal location={activeLocation} onClose={() => setActiveLocation(null)} />
        </MainLayout>
    );
}