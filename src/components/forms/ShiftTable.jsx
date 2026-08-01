import React from 'react';

export default function ShiftTable({ 
    locations, 
    shifts, 
    selectedSelections = [], 
    onCheckboxChange, 
    onViewLocation 
}) {
    if (!locations.length || !shifts.length) {
        return <p className="text-center text-muted my-4">Cargando turnos disponibles...</p>;
    }

    const selectionsArray = Array.isArray(selectedSelections) 
        ? selectedSelections 
        : Object.values(selectedSelections);

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
    const hasMultipleShiftsPerDay = shifts.some(shift => shift.start_time); 
    const uniqueDays = [...new Set(shifts.map(s => getShiftKey(s)))];

    if (hasMultipleShiftsPerDay) {
        const timeSlots = [...new Set(shifts.map(s => `${formatTime(s.start_time)} - ${formatTime(s.end_time)}`))];

        return (
            <div className="table-responsive">
                <table className="table table-custom text-center align-middle">
                    <thead>
                        <tr>
                            <th style={{ width: '30%' }} rowSpan="2" className="py-3 align-middle">Lugares</th>
                            {uniqueDays.map(dayKey => (
                                <th key={dayKey} colSpan={timeSlots.length} className="py-2 border-bottom">
                                    {formatDate(dayKey)}
                                </th>
                            ))}
                        </tr>
                        <tr>
                            {uniqueDays.map(dayKey => (
                                timeSlots.map(slot => (
                                    <th key={`${dayKey}-${slot}`} className="py-2 small text-muted" style={{ minWidth: '120px' }}>
                                        {slot}
                                    </th>
                                ))
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map(location => (
                            <tr key={location.id}>
                                <td className="text-start td-location-name">
                                    <div className="d-flex justify-content-between align-items-center px-2 ">
                                        <span>{location.name}</span>
                                        <button 
                                            type="button" 
                                            className="btn btn-sm btn-link text-dark p-0 border-0 shadow-none"
                                            onClick={() => onViewLocation(location)}
                                            title="Ver información y ubicación"
                                        >
                                            <i className="bi bi-geo-alt-fill fs-5 text-danger"></i>
                                        </button>
                                    </div>
                                </td>
                                {uniqueDays.map(dayKey => (
                                    timeSlots.map(slot => {
                                        const [start, end] = slot.split(' - ');
                                        const shift = shifts.find(s => 
                                            s.location_id === location.id && 
                                            getShiftKey(s) === dayKey && 
                                            formatTime(s.start_time) === start && 
                                            formatTime(s.end_time) === end
                                        );
                                        
                                        if (!shift) {
                                            return <td key={`${dayKey}-${slot}-${location.id}`}><span className="text-muted small">-</span></td>;
                                        }

                                        const isChecked = selectionsArray.includes(shift.id);

                                        return (
                                            <td key={`${dayKey}-${slot}-${location.id}`}>
                                                <div className="form-check d-flex justify-content-center">
                                                    <input 
                                                        type="checkbox" 
                                                        className="form-check-input" 
                                                        style={{ transform: 'scale(1.3)', cursor: 'pointer' }}
                                                        checked={isChecked}
                                                        onChange={() => onCheckboxChange(dayKey, shift.id, { start, end })}
                                                    />
                                                </div>
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

    return (
        <div className="table-responsive">
            <table className="table table-custom text-center align-middle">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }} className="py-3">Lugares</th>
                        {uniqueDays.map(dayKey => (
                            <th key={dayKey} className="py-3">{formatDate(dayKey)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {locations.map(location => (
                        <tr key={location.id}>
                            <td className="text-start">
                                <div className="d-flex justify-content-between align-items-center px-2">
                                    <span>{location.name}</span>
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-link text-dark p-0 border-0 shadow-none"
                                        onClick={() => onViewLocation(location)}
                                        title="Ver información y ubicación"
                                    >
                                        <i className="bi bi-geo-alt-fill fs-5 text-danger"></i>
                                    </button>
                                </div>
                            </td>
                            {uniqueDays.map(dayKey => {
                                const shift = shifts.find(s => s.location_id === location.id && getShiftKey(s) === dayKey);
                                
                                if (!shift) {
                                    return <td key={dayKey}><span className="text-muted small">-</span></td>;
                                }

                                const slotKey = `${dayKey}_${start}-${end}`;
                                const isChecked = selectionsArray.includes(shift.id);

                                return (
                                    <td key={dayKey}>
                                        <div className="form-check d-flex justify-content-center">
                                            <input 
                                                type="checkbox" 
                                                className="form-check-input" 
                                                style={{ transform: 'scale(1.3)', cursor: 'pointer' }}
                                                checked={isChecked}
                                                onChange={() => onCheckboxChange(dayKey, shift.id, { start, end })}
                                            />
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}