import { useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import catLoader from '../../assets/cat-loader.gif';
import { activityService } from '../../services/activityService';
import styles from './ActividadesPage.module.css';

export default function ActividadesPage() {
    // Pasos del asistente: 1 (Tipo), 2 (Edad), 3 (Resultado Aleatorio)
    const [step, setStep] = useState(1);

    const [ageRanges, setAgeRanges] = useState([]);
    const [activityTypes, setActivityTypes] = useState([]);

    const [selectedActivityType, setSelectedActivityType] = useState('');
    const [selectedAgeRange, setSelectedAgeRange] = useState('');

    const [randomActivity, setRandomActivity] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadFilters = async () => {
            const ranges = await activityService.getAgeRanges();
            const types = await activityService.getActivityTypes();

            setAgeRanges(ranges || []);
            setActivityTypes(types || []);
        };
        loadFilters();
    }, []);

    const handleSelectType = (typeId) => {
        setSelectedActivityType(typeId);
        setStep(2);
    };

    const handleSelectAgeRange = async (rangeId) => {
        setSelectedAgeRange(rangeId);
        setStep(3);
        setLoading(true);

        try {
            const response = await activityService.getActivities(rangeId, selectedActivityType);
            const activitiesList = response.data || [];

            if (activitiesList.length > 0) {
                const randomIndex = Math.floor(Math.random() * activitiesList.length);
                setRandomActivity(activitiesList[randomIndex]);
            } else {
                setRandomActivity(null);
            }
        } catch (error) {
            console.error("Error al buscar actividades", error);
            setRandomActivity(null);
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setStep(1);
        setSelectedActivityType('');
        setSelectedAgeRange('');
        setRandomActivity(null);
    };

    return (
        <MainLayout>
            <div className='container'>
                <h1 className='h1 text-center'>
                    Actividades de ocio y tiempo libre
                </h1>
                <p className='text-center'>
                    ¿Qué hacer hoy? Yo te ayudo con eso
                </p>

                {/* PASO 1: TIPO DE ACTIVIDAD */}
                {step === 1 && (
                    <div className={`${styles.cardStep}`}>
                        <div className="card-body text-center">
                            <h3 className="card-title">¿Qué quieres hacer?</h3>
                            <p className="text-muted">Selecciona el tipo de actividad.</p>
                            
                            {activityTypes.length === 0 ? (
                                <div className={styles.loaderContainer}>
                                    <img
                                        src={catLoader}
                                        alt="Cargando..."
                                        className={styles.loaderImage}
                                    />
                                    <p className="mt-3 text-muted">Cargando opciones...</p>
                                </div>
                            ) : (
                                <div className={`d-flex flex-wrap justify-content-center gap-3 ${styles.optionsContainer}`}>
                                    {activityTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            className={`${styles.optionBtn}`}
                                            onClick={() => handleSelectType(type.id)}
                                        >
                                            {type.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* PASO 2: RANGO DE EDAD */}
                {step === 2 && (
                    <div className={`${styles.cardStep}`}>
                        <div className="card-body text-center">
                            <h3 className="card-title">¿Para quién?</h3>
                            <p className="text-muted">Selecciona el rango de edad de los participantes.</p>
                            
                            <div className={`d-flex flex-wrap justify-content-center gap-3 my-4 ${styles.optionsContainer}`}>
                                {ageRanges.map((range) => (
                                    <button
                                        key={range.id}
                                        className={`${styles.optionBtn}`}
                                        onClick={() => handleSelectAgeRange(range.id)}
                                    >
                                        {range.name}
                                    </button>
                                ))}
                            </div>

                            <button
                                className={`btn-gray py-2 rounded-3 ${styles.backBtn}`}
                                onClick={() => setStep(1)}
                            >
                                ← Volver al paso anterior
                            </button>
                        </div>
                    </div>
                )}

                {/* PASO 3: CARGA Y RESULTADO ALEATORIO */}
                {step === 3 && (
                    <div className={`${styles.cardStep}`}>
                        <div className="card-body text-center">
                            {loading ? (
                                <div className={styles.loaderContainer}>
                                    <img
                                        src={catLoader}
                                        alt="Cargando..."
                                        className={styles.loaderImage}
                                    />
                                    <p className="text-muted">Buscando y eligiendo la mejor opción...</p>
                                </div>
                            ) : randomActivity ? (
                                <div className={styles.resultContainer}>
                                    <h2 className="card-title">✨ ¡Te recomiendo esta actividad!</h2>
                                    
                                    <div className={`${styles.resultCard}`}>
                                        {randomActivity.image_url && (
                                            <img
                                                src={randomActivity.image_url}
                                                className={`${styles.resultImage}`}
                                                alt={randomActivity.name}
                                            />
                                        )}
                                        <div className="card-body text-start">
                                            <h4 className="card-title my-4 c-accent">{randomActivity.name}</h4>
                                            <p className="card-text text-muted">{randomActivity.description}</p>

                                            <div className='my-2 d-flex'>
                                                <span className="badge-primary">
                                                    {randomActivity.activity_type?.name}
                                                </span>
                                                <span className="badge-deep">
                                                    {randomActivity.participants_min} - {randomActivity.participants_max} participantes
                                                </span>
                                            </div>

                                            <h6 className='mt-4'>Materiales</h6>
                                            {randomActivity.materials?.length > 0 ? (
                                                <ul className="small">
                                                    {randomActivity.materials.map((material) => (
                                                        <li key={material.id}>{material.name}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-muted small"><i class="bi bi-clipboard-x"></i> No necesita materiales</p>
                                            )}

                                            <hr />

                                            <h6>Instrucciones</h6>
                                            <p className="small">{randomActivity.instructions}</p>
                                        </div>
                                    </div>

                                    <button
                                        className={`btn btn-accent px-4 my-2 fw-semibold`}
                                        onClick={handleReset}
                                    >
                                        <i class="bi bi-arrow-clockwise"></i> Buscar otra actividad
                                    </button>
                                </div>
                            ) : (
                                <div className={styles.noResultContainer}>
                                    <p className="text-muted">No hemos encontrado actividades con estos filtros.</p>
                                    <button 
                                        className="btn btn-secondary"
                                        onClick={handleReset}
                                    >
                                        Intentar de nuevo
                                    </button>
                                </div>
                            )}
                        </div> 
                    </div>
                )} 
            </div>
        </MainLayout>
    );
}