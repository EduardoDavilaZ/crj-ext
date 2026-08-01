import ShiftTable from './ShiftTable';
import catLoader from '../../assets/cat-loader.gif';

export default function ProjectShiftSection({
    loading,
    shifts,
    locations,
    selectedSelections,
    handleCheckboxChange,
    setActiveLocation,
    extraContent
}) {
    return (
        <div className="my-2">
            {extraContent}

            {loading ? (
                <div className="center loader">
                    <img 
                        src={catLoader}
                        alt="Cargando proyectos..."
                    />
                </div>
            ) : shifts && shifts.length > 0 ? (
                <ShiftTable 
                    locations={locations}
                    shifts={shifts}
                    selectedSelections={selectedSelections}
                    onCheckboxChange={handleCheckboxChange}
                    onViewLocation={(loc) => setActiveLocation(loc)}
                />
            ) : (
                <div className="alert alert-warning text-center py-4 my-3" role="alert">
                    <h5 className="alert-heading fw-bold">¡Vaya! No hay turnos disponibles</h5>
                    <p className="mb-0">En este momento este proyecto no tiene turnos activos para apuntarse. Por favor, consulta más adelante o ponte en contacto con nosotros.</p>
                </div>
            )}
        </div>
    );
}