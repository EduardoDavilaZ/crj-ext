export default function LocationModal({ location, onClose }) {
    if (!location) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content p-3">
                    <div className="modal-header border-0 pb-0">
                        <h3 className="modal-title fw-bold text-danger">{location.name}</h3>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6">
                                <p className="text-secondary subtitle mb-3">{location.description}</p>
                                <img 
                                    src={location.img_path} 
                                    alt={location.name} 
                                    className="img-fluid rounded border shadow-sm"
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="border rounded overflow-hidden shadow-sm d-flex justify-content-center" dangerouslySetInnerHTML={{ __html: location.location }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-0 pt-0">
                        <button type="button" className="btn-gray py-2 rounded-3" onClick={onClose}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}