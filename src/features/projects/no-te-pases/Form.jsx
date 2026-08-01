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
    } = useProjectForm(slug || "no-te-pases", "No Te Pases");

    return (
        <MainLayout>
            <div className='container form-container'>
                <h1 className='h1 my-4'>{projectTitle}</h1>

                <div>
                    <span className='subtitle'>
                        ¡Promovemos la fiesta segura! Inscríbete y participa en espacios dinámicos y divertidos para disfrutar del ocio con cabeza.
                    </span>
                    <span className='kudos d-block my-2 datetime'>Horario: 21:00 - 04:00</span>
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
                                <label className='form-label fw-bold d-block mb-2'>Selecciona tus turnos:</label>
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