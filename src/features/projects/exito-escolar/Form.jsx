import { useParams } from 'react-router-dom';
import MainLayout from '../../../layouts/MainLayout';
import LocationModal from '../../../components/modals/LocationModal';
import ProjectShiftSection from '../../../components/forms/ProjectShiftSection';
import { useProjectForm } from '../../../hooks/useProjectForm';
import { getCurrentWeekRange } from '../../../utils/dateUtils';

export default function Form() {
    const { slug } = useParams();
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
    } = useProjectForm(slug || "exito-escolar", "Promoción del Éxito Escolar");

    return (
        <MainLayout>
            <div className='container form-container'>
                <h1 className='h1 my-4'>{projectTitle}</h1>

                <div>
                    <span className='subtitle'>
                        ¡Conviértete en su apoyo escolar! Inscríbete para impartir refuerzo educativo y ayúdales a alcanzar sus metas.
                    </span>
                    <span className='kudos d-block my-2 datetime'>Horario: 17:00 - 19:00</span>
                </div>
                
                <form onSubmit={handleSubmit}>
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
                                <label className='form-label fw-bold d-block mb-2'>Apúntate aquí abajo <i class="bi bi-pen"></i>:</label>
                                <span className='kudos d-block datetime my-2'>{getCurrentWeekRange()}</span>
                            </>
                        }
                    />

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