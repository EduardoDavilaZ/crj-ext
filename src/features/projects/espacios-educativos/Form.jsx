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
    } = useProjectForm(slug || "espacios-educativos", "Espacios Educativos Saludables");

    return (
        <MainLayout>
            <div className='container form-container'>
                <h1 className='h1 my-4'>{projectTitle}</h1>

                <div>
                    <span className='subtitle'>
                        Formulario de inscripción para las actividades del proyecto. 
                    </span>

                    <span className='kudos d-block my-2 datetime'>Horario: 9:30 - 14:00</span>

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
                        <div className="my-2">
                            <label htmlFor="name" className='form-label fw-bold my-2'>Nombre y apellido</label>
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

                        <div className="my-2">
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