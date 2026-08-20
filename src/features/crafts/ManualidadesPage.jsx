import { useState, useEffect } from 'react';

import MainLayout from '../../layouts/MainLayout';
import catLoader from '../../assets/cat-loader.gif';
import { craftService } from '../../services/craftService';
import styles from './ManualidadesPage.module.css';

export default function ManualidadesPage() {
    // Pasos del asistente:
    // 1 (Edad), 2 (Resultado aleatorio)
    const [step, setStep] = useState(1);
    const [ageRanges, setAgeRanges] = useState([]);
    const [selectedAgeRange, setSelectedAgeRange] = useState('');
    const [randomCraft, setRandomCraft] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadAgeRanges = async () => {
            const ranges = await craftService.getAgeRanges();
            setAgeRanges(ranges || []);
        };

        loadAgeRanges();
    }, []);

    const handleSelectAgeRange = async (rangeId) => {
        setSelectedAgeRange(rangeId);
        setStep(2);
        setLoading(true);

        try {
            const response = await craftService.getCrafts(rangeId);
            const craftsList = response.data || [];

            if (craftsList.length > 0) {
                const randomIndex = Math.floor(
                    Math.random() * craftsList.length
                );
                setRandomCraft(craftsList[randomIndex]);
            } else {
                setRandomCraft(null);
            }

        } catch (error) {
            console.error(
                'Error al buscar manualidades',
                error
            );

            setRandomCraft(null);
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setStep(1);
        setSelectedAgeRange('');
        setRandomCraft(null);
    };

    return (
        <MainLayout>
            <div className="container">
                <h1 className="h1 text-center">
                    Manualidades
                </h1>

                <p className="text-center">
                    ¿Qué manualidad podemos hacer? Yo te ayudo con eso
                </p>


                {/* PASO 1: RANGO DE EDAD */}

                {step === 1 && (
                    <div className={styles.cardStep}>
                        <div className="card-body text-center">
                            <h3 className="card-title">
                                ¿Para quién?
                            </h3>

                            <p className="text-muted">
                                Selecciona el rango de edad de los participantes.
                            </p>


                            {ageRanges.length === 0 ? (
                                <div className={styles.loaderContainer}>
                                    <img
                                        src={catLoader}
                                        alt="Cargando..."
                                        className={styles.loaderImage}
                                    />
                                    <p className="mt-3 text-muted">
                                        Cargando opciones...
                                    </p>
                                </div>

                            ) : (
                                <div
                                    className={`d-flex flex-wrap justify-content-center gap-3 ${styles.optionsContainer}`}
                                >
                                    {ageRanges.map((range) => (
                                        <button
                                            key={range.id}
                                            className={styles.optionBtn}
                                            onClick={() =>
                                                handleSelectAgeRange(range.id)
                                            }
                                        >
                                            {range.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* PASO 2: CARGA Y RESULTADO */}
                {step === 2 && (
                    <div className={styles.cardStep}>
                        <div className="card-body text-center">
                            {loading ? (
                                <div className={styles.loaderContainer}>
                                    <img
                                        src={catLoader}
                                        alt="Cargando..."
                                        className={styles.loaderImage}
                                    />

                                    <p className="text-muted">
                                        Buscando y eligiendo una manualidad...
                                    </p>

                                </div>

                            ) : randomCraft ? (
                                <div className={styles.resultContainer}>
                                    <h2 className="card-title mb-4">
                                        ✨ ¡Te recomiendo esta manualidad!
                                    </h2>

                                    <div className={styles.resultCard}>
                                        {randomCraft.image_url && (
                                            <img
                                                src={randomCraft.image_url}
                                                className={styles.resultImage}
                                                alt={randomCraft.name}
                                            />
                                        )}

                                        <div className="card-body text-start">
                                            <h4 className="card-title my-4 c-accent">
                                                {randomCraft.name}
                                            </h4>

                                            <p className="card-text text-muted">
                                                {randomCraft.description}
                                            </p>

                                            <hr />

                                            <h6>
                                                Materiales
                                            </h6>

                                            {randomCraft.materials?.length > 0 ? (
                                                <ul className="small">
                                                    {randomCraft.materials.map(
                                                        (material) => (
                                                            <li key={material.id}>
                                                                {material.name}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            ) : (
                                                <p className="text-muted small">
                                                    <i className="bi bi-clipboard-x"></i>
                                                    {' '}No necesita materiales
                                                </p>
                                            )}

                                            <hr />
                                            <h6>
                                                Instrucciones
                                            </h6>

                                            <p className="small">
                                                {randomCraft.instructions}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        className="btn btn-accent px-4 my-2 fw-semibold"
                                        onClick={handleReset}
                                    >
                                        <i className="bi bi-arrow-clockwise"></i>
                                        {' '}Buscar otra manualidad
                                    </button>
                                </div>
                            ) : (

                                <div className={styles.noResultContainer}>
                                    <p className="text-muted">
                                        No hemos encontrado manualidades
                                        para este rango de edad.
                                    </p>

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