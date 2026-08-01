import MainLayout from '../../../layouts/MainLayout';

export default function InfoPage() {
    return (
        <MainLayout>
            <div className='container'>
                <h1 className='h1'>Espacio Propio</h1>
                <p className='subtitle'>
                    Puntos violeta en eventos de ocio y grandes concentraciones para crear entornos seguros.
                </p>

                <section>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h2 className='h2'>¿Qué se hace?</h2>
                            <p>
                                Instalamos puntos violeta en espacios de ocio joven, festivales y eventos multitudinarios para garantizar la seguridad, la información y la prevención frente a agresiones.
                            </p>
                            <ul>
                                <li><strong>Sensibilización</strong>: Informar a la población, desnormalizar conductas machistas cotidianas y difundir recursos de apoyo.</li>
                                <li><strong>Prevención</strong>: Acercar dinámicas lúdicas y educativas para promover la igualdad y el respeto mutuo.</li>
                                <li><strong>Actuación y Acompañamiento</strong>: Ofrecer un espacio seguro donde atender, proteger y acompañar a las víctimas ante cualquier situación de agresión.</li>
                            </ul>
                        </div>

                        <div className='col-12 col-md-6 center'>
                            <img src="https://www2.cruzroja.es/documents/510923428/510961486/EspacioPropio1.jpg/9e1cebac-8794-e540-5e9d-9320f0e7a807?t=1629189850966" alt="crj" className='shadow-md rounded-2 w-75' />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className='h2'>¿Qué debo tener en cuenta?</h2>

                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                        
                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Formación</h4>
                                <p>
                                    Para participar activamente en el proyecto es obligatorio haber completado la formación específica de Espacio Propio. ¡Mantente atent@ a las próximas convocatorias!
                                </p>
                                <i className="bi bi-mortarboard"></i>
                            </div>
                        </div>
                        
                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Ropa de CRJ</h4>
                                <p>
                                    Es obligatorio acudir uniformados. Si te hace falta un chaleco oficial o camiseta no dudes en pedirla.
                                </p>
                                <i className="bi bi-person-check-fill"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Trabajo en Equipo</h4>
                                <p>
                                    El voluntariado siempre se organiza en parejas: mientras unas personas realizan labores itinerantes de información, otras permanecen fijas en la carpa.
                                </p>
                                <i className="bi bi-people-fill"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Empatía y Escucha</h4>
                                <p>
                                    Mantén una actitud abierta, cercana y libre de juicios para ofrecer un clima de absoluta confianza y seguridad a quienes se acerquen al punto.
                                </p>
                                <i className="bi bi-heart-fill"></i>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}