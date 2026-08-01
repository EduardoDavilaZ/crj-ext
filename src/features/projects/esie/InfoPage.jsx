import MainLayout from '../../../layouts/MainLayout';

export default function InfoPage() {
    return (
        <MainLayout>
            <div className='container'>
                <h1 className='h1'>Equipos de Sensibilización e Información ante Emergencias (ESIE)</h1>
                <p className='subtitle'>
                    Los ESIE garantizan que se cumplan los derechos de la infancia en las emergencias, les informan y acompañan en todo momento.
                </p>

                <section>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h2 className='h2'>¿Qué se hace?</h2>
                            <p>
                                Actuamos de primera línea en catástrofes, desalojos y grandes crisis humanitarias, ofreciendo un entorno seguro y de confianza a los menores afectados.
                            </p>
                            <ul>
                                <li><strong>Espacios lúdicos</strong>: Habilitamos zonas de juego y entretenimiento adaptadas para canalizar emociones, mitigar el miedo y devolver la alegría en situaciones críticas.</li>
                                <li><strong>Acompañamiento y apoyo</strong>: Brindamos cercanía en las rutinas diarias, acompañándoles a comer o dándoles soporte mientras sus familias gestionan trámites burocráticos.</li>
                                <li><strong>Información adaptada</strong>: Explicamos el proceso y la situación de emergencia con un lenguaje claro y accesible, ayudándoles a comprender lo que ocurre.</li>
                            </ul>
                        </div>

                        <div className='col-12 col-md-6 center'>
                            <img src="https://www2.cruzroja.es/documents/510923428/0/ESIE_DANA_infancia_2+%281%29.jpg/b46adfe8-fd69-2b64-6e3a-25cf4c27461a?t=1732004789118" alt="crj" className='shadow-md rounded-2 w-75' />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className='h2'>¿Qué debo tener en cuenta?</h2>

                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                        
                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Formación ESIE</h4>
                                <p>
                                    Para participar activamente en el proyecto es obligatorio haber completado la formación específica ESIE. ¡Mantente atent@ a las próximas convocatorias!
                                </p>
                                <i class="bi bi-mortarboard"></i>
                            </div>
                        </div>
                        
                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Coordinación</h4>
                                <p>
                                    Ante una emergencia, el voluntariado recibe una pre-alerta y la activación formal a través de canales oficiales si se requiere movilizar recursos.
                                </p>
                                <i class="bi bi-megaphone"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Certificado DS</h4>
                                <p>
                                    Al intervenir de forma directa con la infancia en contextos vulnerables, debes aportar obligatoriamente el Certificado Negativo de Delitos Sexuales.
                                </p>
                                <i className="bi bi-file-earmark-x"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Disponibilidad</h4>
                                <p>
                                    Las emergencias no avisan. Se valora la flexibilidad y capacidad de respuesta rápida ante despliegues humanitarios imprevistos.
                                </p>
                                <i class="bi bi-exclamation-triangle"></i>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}