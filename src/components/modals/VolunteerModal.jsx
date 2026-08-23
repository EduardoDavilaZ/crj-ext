export default function VolunteerModal({ onClose }) {
    return (
        <div
            className="modal show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content shadow-lg border-0 rounded-4">


                    <div className="modal-header bg-danger text-white rounded-top-4">
                        <h5 className="modal-title fw-bold">
                            <i className="bi bi-heart-fill me-2"></i>
                            ¿Quieres ser voluntario/a?
                        </h5>

                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={onClose}
                            aria-label="Cerrar"
                        ></button>
                    </div>


                    <div className="modal-body p-4">
                        <div className="text-center mb-4">
                            <i
                                className="bi bi-people-fill text-danger"
                                style={{ fontSize: '3rem' }}
                            ></i>

                            <h3 className="h2"> ¡Únete a Cruz Roja Juventud! </h3>

                            <p className="subtitle">
                                Si quieres participar, conocer gente y contribuir
                                a mejorar tu entorno, puedes formar parte de nuestro
                                equipo de voluntariado.
                            </p>
                        </div>

                        {/* PASO 1 */}
                        <div className="d-flex gap-3 my-4">
                            <div>
                                <span className="circle-number"> 1 </span>
                            </div>

                            <div>
                                <h5 className="fw-bold mb-1">Accede al formulario de voluntariado</h5>

                                <p className="text-muted mb-0">
                                    Para comenzar, debes acceder al
                                    <a
                                        href="https://www2.cruzroja.es/alta-voluntario-web"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-1 c-accent fw-bold"
                                    >
                                        formulario oficial
                                    </a>
                                    para iniciar tu proceso de incorporación como persona voluntaria.
                                </p>
                            </div>
                        </div>

                        {/* PASO 2 */}
                        <div className="d-flex gap-3 my-4">
                            <div>
                                <span className="circle-number"> 2 </span>
                            </div>

                            <div>
                                <h5 className="fw-bold mb-1">Completa tus datos</h5>

                                <p className="text-muted mb-0">
                                    Rellena tus datos personales y cuéntanos
                                    cuáles son tus intereses, disponibilidad
                                    y áreas en las que te gustaría colaborar.
                                </p>
                            </div>
                        </div>

                        {/* PASO 3 */}
                        <div className="d-flex gap-3 my-4">
                            <div>
                                <span className="circle-number"> 3 </span>
                            </div>

                            <div>
                                <h5 className="fw-bold mb-1">Conoce tu asamblea</h5>

                                <p className="text-muted mb-0">
                                    Acude a la oficina de Dirección de Voluntariado 
                                    de la comarca Tierras de Badajoz, ubicada en 
                                    Calle Museo n.º 5 (2.ª planta) para conocernos. 
                                    El equipo de Cruz Roja se pondrá en contacto contigo 
                                    para orientarte sobre las opciones de voluntariado 
                                    disponibles.
                                </p>

                                <div className="my-2">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14354.927674267037!2d-6.981114958413707!3d38.87415254894298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd16e42fcb9f885b%3A0x2d2d4b480b4c613c!2sCruz%20Roja!5e0!3m2!1ses-419!2ses!4v1787450950125!5m2!1ses-419!2ses" width="90%" height="200" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                </div>
                            </div>
                        </div>

                        {/* PASO 4 */}
                        <div className="d-flex gap-3 my-4">
                            <div>
                                <span className="circle-number"> 4 </span>
                            </div>

                            <div>
                                <h5 className="fw-bold mb-1"> ¡Empieza a participar! </h5>

                                <p className="text-muted mb-0">
                                    Una vez realizado el proceso de incorporación,
                                    podrás participar en proyectos, actividades
                                    y acciones de Cruz Roja Juventud.
                                </p>
                            </div>
                        </div>

                        <div className="alert alert-light border rounded-3">
                            <i className="bi bi-info-circle-fill text-danger me-2"></i>

                            <strong>Importante:</strong>{' '}
                            El proceso de alta como persona voluntaria se realiza
                            a través de los canales oficiales de Cruz Roja.
                        </div>
                    </div>


                    <div className="modal-footer bg-light d-flex justify-content-between rounded-bottom-4">

                        <button
                            type="button"
                            className="btn-gray px-4 py-2 rounded-3"
                            onClick={onClose}
                        >
                            <i className="bi bi-x-circle me-1"></i> Cerrar
                        </button>

                        <a
                            href="https://www2.cruzroja.es/alta-voluntario-web"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-accent px-4 py-2 rounded-3 text-decoration-none"
                        >
                            <i className="bi bi-heart-fill me-1"></i> Quiero hacerme voluntario/a
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}