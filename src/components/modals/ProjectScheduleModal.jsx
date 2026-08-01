import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import RegisteredScheduleTable from '../forms/RegisteredScheduleTable'; 
import LocationModal from './LocationModal'; 
import { projectService } from '../../services/projectService';
import { getCurrentWeekRange } from '../../utils/dateUtils';

export default function ProjectScheduleModal({ show, onClose, projectId, projectTitle, project }) {
    const scheduleRef = useRef(null);
    const [downloading, setDownloading] = useState(false);
    
    const [shifts, setShifts] = useState([]);
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [activeLocation, setActiveLocation] = useState(null);

    useEffect(() => {
        if (show && projectId) {
            setLoading(true);
            setError(null);

            projectService.getShiftsByProject(projectId)
                .then((data) => {
                    let fetchedLocations = [];
                    let fetchedShifts = [];

                    if (Array.isArray(data)) {
                        fetchedLocations = data.map(loc => ({
                            id: loc.id,
                            name: loc.name,
                            description: loc.description,
                            location: loc.location,
                            img_path: loc.img_path
                        }));

                        data.forEach(loc => {
                            if (loc.shifts && Array.isArray(loc.shifts)) {
                                const shiftsWithLoc = loc.shifts.map(s => ({
                                    ...s,
                                    location_id: s.location_id || loc.id
                                }));
                                fetchedShifts = [...fetchedShifts, ...shiftsWithLoc];
                            }
                        });
                    } else if (data && typeof data === 'object') {
                        fetchedShifts = data.shifts || [];
                        if (data.id && data.name) {
                            fetchedLocations = [{
                                id: data.id,
                                name: data.name,
                                description: data.description,
                                location: data.location
                            }];
                        } else if (fetchedShifts.length > 0) {
                            fetchedLocations = [{
                                id: fetchedShifts[0].location_id,
                                name: data.project_title || projectTitle,
                            }];
                        }
                    }

                    setShifts(fetchedShifts);
                    setLocations(fetchedLocations);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error al obtener los turnos del proyecto:", err);
                    setError("No se pudieron cargar los turnos.");
                    setLoading(false);
                });
        }
    }, [show, projectId, projectTitle]);

    if (!show) return null;

    const handleDownloadJpg = async () => {
        if (!scheduleRef.current) return null;
        setDownloading(true);

        const element = scheduleRef.current;
        
        // Truco: Guardamos los estilos originales para forzar el ancho total durante la captura
        const originalWidth = element.style.width;
        const originalMaxWidth = element.style.maxWidth;

        try {
            // Forzamos un ancho de escritorio fijo temporalmente para que la tabla no se comprima ni recorte
            element.style.width = '1000px';
            element.style.maxWidth = 'none';

            const canvas = await html2canvas(element, { 
                scale: 2, 
                useCORS: true,
                windowWidth: 1200 // Simula una ventana de escritorio para evitar recortes responsivos
            });

            const image = canvas.toDataURL('image/jpeg', 0.9);
            const link = document.createElement('a');
            link.href = image;
            link.download = `cuadrante-${projectTitle.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            link.click();
            return link.download;
        } catch (error) {
            console.error("Error al generar la imagen:", error);
            return null;
        } finally {
            // Restauramos los estilos originales del contenedor inmediatamente después
            element.style.width = originalWidth;
            element.style.maxWidth = originalMaxWidth;
            setDownloading(false);
        }
    };

    return (
        <>
            <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content shadow-lg border-0 rounded-4">
                        
                        <div className="modal-header bg-danger text-white rounded-top-4">
                            <h5 className="modal-title fw-bold">
                                <i className="bi bi-calendar2-check me-2"></i> Cuadrante: {projectTitle}
                            </h5>
                            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                        </div>

                        <div className="modal-body p-4 bg-light">
                            {/* Contenedor con scroll horizontal para móviles */}
                            <div className="table-responsive">
                                <div ref={scheduleRef} className="bg-white p-4 rounded-3 shadow-sm" style={{ minWidth: '750px' }}>
                                    <div className="text-center mb-3">
                                        <h4 className="fw-bold text-danger">{projectTitle}</h4>
                                        <p className="text-muted small mb-0">Cuadrante de turnos {getCurrentWeekRange(project, shifts)}</p>
                                    </div>

                                    {loading ? (
                                        <div className="text-center py-5">
                                            <div className="spinner-border text-danger" role="status">
                                                <span className="visually-hidden">Cargando...</span>
                                            </div>
                                            <p className="text-muted mt-2 small">Cargando turnos y ubicaciones...</p>
                                        </div>
                                    ) : error ? (
                                        <div className="alert alert-danger text-center my-3" role="alert">
                                            {error}
                                        </div>
                                    ) : (
                                        <RegisteredScheduleTable 
                                            locations={locations}
                                            shifts={shifts}
                                            onViewLocation={(loc) => setActiveLocation(loc)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer bg-white rounded-bottom-4 justify-content-between">
                            <button type="button" className="btn-gray py-2 rounded-3" onClick={onClose}>
                                Cerrar
                            </button>

                            <div className="d-flex gap-2">
                                <button 
                                    type="button" 
                                    className="btn-accent p-2 rounded-3 text-decoration-none border-0" 
                                    onClick={handleDownloadJpg}
                                    disabled={downloading || loading}
                                >
                                    <i className="bi bi-download me-1"></i> {downloading ? 'Generando...' : 'Descargar JPG'}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <LocationModal location={activeLocation} onClose={() => setActiveLocation(null)} />
        </>
    );
}