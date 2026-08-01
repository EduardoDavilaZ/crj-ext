import { useState } from 'react'; // <--- Asegúrate de importar useState
import { useParams } from 'react-router-dom';
import MainLayout from '../../../layouts/MainLayout';
import LocationModal from '../../../components/modals/LocationModal';
import ProjectShiftSection from '../../../components/forms/ProjectShiftSection';
import { useProjectForm } from '../../../hooks/useProjectForm';
import { getCurrentWeekRange } from '../../../utils/dateUtils';

export default function Form() {
    const { slug } = useParams();

    const [needsVest, setNeedsVest] = useState(false);

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
        handleCheckboxChange,
        handleSubmit
    } = useProjectForm(slug || "juguete-educativo", "El Juguete Educativo");

    return (
        <MainLayout>
            <div className='container form-container'>
                <h1 className='h1 my-4'>{projectTitle}</h1>

                <div>
                    <span className='subtitle'>
                        Inscríbete para colaborar en la campaña de recogida y distribución de juguetes.
                    </span>
                    <span className='kudos d-block my-2 datetime'>
                        Turno mañana: 10:00 - 14:00<br />
                        Turno tarde: 17:00 - 21:30
                    </span>
                </div>
                
                <form onSubmit={(e) => handleSubmit(e, { needs_vest: needsVest })}>
                    <div className="my-2">
                        <label htmlFor="name" className='form-label fw-bold my-2'>Nombre y apellido</label>
                        <input 
                            type="text" 
                            className='form-control' 
                            id="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>

                    <ProjectShiftSection 
                        loading={loading}
                        shifts={shifts}
                        locations={locations}
                        selectedSelections={selectedSelections}
                        handleCheckboxChange={handleCheckboxChange}
                        setActiveLocation={setActiveLocation}
                        extraContent={
                            <>
                                <label className='form-label fw-bold d-block mb-2'>Selecciona tus turnos por centro y día:</label>
                                <span className='kudos d-block datetime my-2'>{getCurrentWeekRange()}</span>
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
            </div>

            <LocationModal location={activeLocation} onClose={() => setActiveLocation(null)} />
        </MainLayout>
    );
}