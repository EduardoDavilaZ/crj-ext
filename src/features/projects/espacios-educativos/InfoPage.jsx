import MainLayout from '../../../layouts/MainLayout';

export default function InfoPage() {
    return (
        <MainLayout>
            <div className='container'>
                <h1 className='h1'>Espacios Educativos Saludables</h1>
                <p className='subtitle'>
                    Espacios de ocio y refuerzo educativo orientados a la infancia
                </p>

                <section>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h2 className='h2'>¿Qué se hace?</h2>
                            <p>
                                ¿Te apasiona transformar la realidad de la infancia en Badajoz? Únete a nuestro equipo y regala sonrisas, apoyo y momentos inolvidables en los colegios de la ciudad. ¡Tu participación cambia vidas!
                            </p>
                            <ul>
                                <li><strong>Refuerzo educativo</strong>: Acompaña a los más pequeños en sus tareas escolares diarias, ayudándoles a comprender y disfrutar de asignaturas clave como matemáticas, lengua e inglés.</li>
                                <li><strong>Ocio y tiempo libre</strong>: Disfruta al aire libre organizando dinámicas grupales, juegos tradicionales y divertidas actividades deportivas diseñadas para fomentar su compañerismo.</li>
                                <li><strong>Excursiones</strong>: Forma parte de salidas lúdicas y culturales inolvidables a piscinas, museos y al Parque de la Legión dentro del programa municipal "Vive el Verano".</li>
                            </ul>
                        </div>

                        <div className='col-12 col-md-6 center'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeDHV5GpgbcOnb-kItBzfBl9r6mLx6pOfYNI8opQPzQHoY6ikZlO7dRQ&s=10" alt="crj" className='shadow-md rounded-2 w-75' />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className='h2'>¿Qué debo tener en cuenta?</h2>

                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                        
                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Asistencia</h4>
                                <p>
                                    El formulario de asistencia se activa cada viernes a mediodía. El cuadrante se genera automáticamente. No olvides rellenar la hoja de firmas al llegar al colegio.
                                </p>
                                <i className="bi bi-list-check"></i>
                            </div>
                        </div>
                        
                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Ropa de CRJ</h4>
                                <p>
                                    Disponemos de chalecos en cada centro para quienes lo necesiten. Su uso resulta obligatorio durante toda la actividad y no deben llevarse a casa.
                                </p>
                                <i className="bi bi-person-check-fill"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Certificado DS</h4>
                                <p>
                                    Al trabajar con menores, debes enviar a la técnico tu Certificado Negativo de Delitos Sexuales actualizado de forma semestral sin excepción.
                                </p>
                                <i className="bi bi-file-earmark-x"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Incidencias</h4>
                                <p>
                                    Si surge cualquier imprevisto con algún menor o docente, comunícalo de inmediato al personal responsable, técnico o consejo local.
                                </p>
                                <i className="bi bi-people"></i>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}