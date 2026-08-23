import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../../layouts/MainLayout';
import LocationModal from '../../../components/modals/LocationModal';
import ProjectShiftSection from '../../../components/forms/ProjectShiftSection';
import { useProjectForm } from '../../../hooks/useProjectForm';
import { getCurrentWeekRange } from '../../../utils/dateUtils';
import SuccessModal from '../../../components/modals/SuccessModal';
import { validateName, validateSelections } from '../../../utils/validators';
import SEO from '../../../components/SEO';

const DEFAULT_SHIFT_LABEL = 'Selecciona tus turnos por centro y día:';
const DEFAULT_VEST_LABEL = '¿Te hace falta chaleco?';

function renderSchedule(schedule) {
    if (!schedule) return null;

    if (typeof schedule !== 'string' && !Array.isArray(schedule)) {
        return schedule;
    }

    if (Array.isArray(schedule)) {
        return (
            <span className="kudos d-block my-2 datetime">
                {schedule.map((line, index) => (
                    <span key={line}>
                        {index > 0 && <br />}
                        {line}
                    </span>
                ))}
            </span>
        );
    }

    return <span className="kudos d-block my-2 datetime">{schedule}</span>;
}

export default function ProjectForm({
    slug,
    projectTitle: defaultTitle,
    subtitle,
    schedule,
    showVestQuestion = false,
    vestLabel = DEFAULT_VEST_LABEL,
    shiftLabel = DEFAULT_SHIFT_LABEL,
    shiftNote,
    instructions,
    disableSubmitWhenSubmitting = false,
}) {
    const { slug: routeSlug } = useParams();
    const [needsVest, setNeedsVest] = useState(false);
    const [errors, setErrors] = useState({});

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
        isSubmitting,
        showSuccessModal,
        setShowSuccessModal,
        handleCheckboxChange,
        handleSubmit: submitFormAction,
    } = useProjectForm(routeSlug || slug, defaultTitle);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameError = validateName(name);
        const selectionError = validateSelections(selectedSelections);

        const newErrors = {
            name: nameError,
            shifts: selectionError,
        };

        setErrors(newErrors);

        if (nameError || selectionError) {
            return;
        }

        const extraPayload = showVestQuestion ? { needs_vest: needsVest } : {};
        submitFormAction(e, extraPayload);
    };

    const shiftSection = (
        <ProjectShiftSection
            loading={loading}
            shifts={shifts}
            locations={locations}
            selectedSelections={selectedSelections}
            handleCheckboxChange={(dayKey, shiftId, slot) => {
                handleCheckboxChange(dayKey, shiftId, slot);
                if (errors.shifts) setErrors({ ...errors, shifts: '' });
            }}
            setActiveLocation={setActiveLocation}
            extraContent={
                <>
                    <label className="form-label fw-bold d-block mb-2">{shiftLabel}</label>
                    <span className="kudos d-block datetime my-2">{getCurrentWeekRange()}</span>
                    {errors.shifts && <div className="error mt-1">{errors.shifts}</div>}
                </>
            }
        />
    );

    return (
        <MainLayout>
            <SEO
                title={`Apuntarse a ${projectTitle}`}
                description={`Apúntate al proyecto ${projectTitle} de Cruz Roja Juventud en Badajoz.`}
                canonical={`https://crj-ext.vercel.app/apuntarme/${routeSlug || slug}`}
                image={`https://crj-ext.vercel.app/og/${routeSlug || slug}.png`}
                noIndex={true}
            />

            <div className="container form-container">
                <h1 className="h1 my-4">{projectTitle}</h1>

                <div>
                    <span className="subtitle">{subtitle}</span>
                    {renderSchedule(schedule)}
                    {instructions}
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="my-2">
                        <label htmlFor="name" className="form-label fw-bold my-2">
                            Nombre y apellido
                        </label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) setErrors({ ...errors, name: '' });
                            }}
                        />
                        {errors.name && <div className="error mt-1">{errors.name}</div>}
                    </div>

                    {shiftNote ? (
                        <div className="my-2">
                            {shiftSection}
                            <small className="text-muted d-block mt-1">{shiftNote}</small>
                        </div>
                    ) : (
                        shiftSection
                    )}

                    {showVestQuestion && (
                        <div className="my-4 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="needs_vest"
                                id="needs_vest"
                                checked={needsVest}
                                onChange={(e) => setNeedsVest(e.target.checked)}
                            />
                            <label htmlFor="needs_vest" className="form-check-label fw-bold">
                                {vestLabel}
                            </label>
                        </div>
                    )}

                    <div className="text-end">
                        <button
                            type="submit"
                            className="btn btn-accent px-4 mb-4 fw-semibold"
                            disabled={disableSubmitWhenSubmitting && isSubmitting}
                        >
                            Completar Inscripción
                        </button>
                    </div>
                </form>

                <SuccessModal show={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
            </div>

            <LocationModal location={activeLocation} onClose={() => setActiveLocation(null)} />
        </MainLayout>
    );
}
