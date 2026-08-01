import React from 'react';

export default function RegisteredScheduleTable({ 
    locations, 
    shifts, 
    onViewLocation 
}) {
    if (!locations || locations.length === 0 || !shifts || shifts.length === 0) {
        return <p className="text-center text-muted my-4">No hay datos para mostrar en el cuadrante.</p>;
    }

    const formatTime = (timeString) => {
        if (!timeString) return '';
        return timeString.substring(0, 5);
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const regexDate = /^\d{4}-\d{2}-\d{2}$/;
        if (regexDate.test(dateString)) {
            const [year, month, day] = dateString.split('-');
            return `${day}/${month}/${year}`;
        }
        return dateString;
    };

    const getShiftKey = (s) => s.day || s.date;

    const uniqueDays = Array.from(new Set(shifts.map(s => getShiftKey(s)))).filter(Boolean);
    
    const timeSlots = Array.from(
        new Set(shifts.map(s => {
            if (!s.start_time || !s.end_time) return null;
            return `${formatTime(s.start_time)} - ${formatTime(s.end_time)}`;
        }))
    ).filter(Boolean);

    if (uniqueDays.length === 0 || timeSlots.length === 0) {
        return <p className="text-center text-muted my-4">No se pudieron extraer días u horarios válidos de los turnos.</p>;
    }

    return (
        <div className="table-responsive">
            <table className="table table-custom">
                <thead>
                    <tr>
                        <th rowSpan="2" className="th-locations">Lugares</th>
                        {uniqueDays.map(dayKey => (
                            <th key={dayKey} colSpan={timeSlots.length}>
                                {formatDate(dayKey)}
                            </th>
                        ))}
                    </tr>
                    <tr>
                        {uniqueDays.map(dayKey => (
                            timeSlots.map(slot => (
                                <th key={`${dayKey}-${slot}`} className="th-slot">
                                    {slot}
                                </th>
                            ))
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {locations.map(location => (
                        <tr key={location.id}>
                            <td className="td-location-name">
                                <div className="d-flex justify-content-between align-items-center px-2">
                                    <span>{location.name}</span>
                                    {onViewLocation && (
                                        <button 
                                            type="button" 
                                            className="btn btn-sm btn-link text-dark p-0 border-0 shadow-none"
                                            onClick={() => onViewLocation(location)}
                                            title="Ver información y ubicación"
                                        >
                                            <i className="bi bi-geo-alt-fill fs-5 text-danger"></i>
                                        </button>
                                    )}
                                </div>
                            </td>
                            {uniqueDays.map(dayKey => (
                                timeSlots.map(slot => {
                                    const [start, end] = slot.split(' - ');
                                    
                                    const shift = shifts.find(s => {
                                        const matchesDay = getShiftKey(s) === dayKey;
                                        const matchesTime = formatTime(s.start_time) === start && formatTime(s.end_time) === end;
                                        const matchesLocation = Number(s.location_id) === Number(location.id);
                                        return matchesDay && matchesTime && matchesLocation;
                                    });
                                    
                                    if (!shift) {
                                        return (
                                            <td key={`${dayKey}-${slot}-${location.id}`}>
                                                <span className="text-muted small">-</span>
                                            </td>
                                        );
                                    }

                                    const registrations = shift.registrations || [];

                                    return (
                                        <td key={`${dayKey}-${slot}-${location.id}`}>
                                            {registrations.length > 0 ? (
                                                <ul className="list-unstyled mb-0 text-start small">
                                                    {registrations.map((reg, idx) => (
                                                        <li key={idx} className="text-danger-emphasis rounded-pill px-1 py-2 d-block text-truncate">
                                                            <i className="bi bi-person-fill me-1"></i> {reg.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <span className="text-muted small fst-italic"></span>
                                            )}
                                            {/* <div className="text-muted mt-1" style={{ fontSize: '10px' }}>
                                                ({registrations.length}/{shift.max_volunteers || '∞'})
                                            </div> */}
                                        </td>
                                    );
                                })
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}