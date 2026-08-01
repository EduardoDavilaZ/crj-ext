import MainLayout from '../../../layouts/MainLayout';

export default function InfoPage() {
    return (
        <MainLayout>
            <div className='container'>
                <h1 className='h1'>Infancia Hospitalizada</h1>
                <p className='subtitle'>
                    Llevando la magia, el juego y la ilusión a los menores ingresados en el Hospital Materno Infantil
                </p>

                <section>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h2 className='h2'>¿Qué se hace?</h2>
                            <p>
                                Acompañamiento cercano a menores en la planta 7 del hospital Materno Infantil de Badajoz mediante dinámicas en el aula de juegos y habitaciones.
                            </p>
                            <ul>
                                <li><strong>Manualidades</strong>: Acompaña a los más pequeños en sus manualidades y talleres creativos diarios, ayudándoles a desarrollar su imaginación y pasar un rato divertido.</li>
                                <li><strong>Juegos de mesa</strong>: Disfruta en el aula de juegos organizando dinámicas lúdicas, entretenimiento de mesa y divertidas actividades diseñadas para fomentar su alegría.</li>
                                <li><strong>Acompañamiento</strong>: Forma parte del apoyo diario y la compañía cercana que se les brinda a los menores ingresados durante su estancia hospitalaria.</li>
                            </ul>
                        </div>

                        <div className='col-12 col-md-6 center'>
                            <img src="https://stockcrowd.s3.amazonaws.com/test/resources/sc/2022/050205/049_1.png" alt="crj" className='shadow-md rounded-2 w-75' />
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
                                    El formulario se activa cada viernes a mediodía y el cuadrante se genera automáticamente. No olvides rellenar la hoja de firmas al llegar al aula.
                                </p>
                                <i className="bi bi-list-check"></i>
                            </div>
                        </div>
                        
                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Ropa de CRJ</h4>
                                <p>
                                    Es obligatorio acudir uniformados. Si te hace falta un chaleco oficial, puedes encontrarlo disponible en el almacén B-69, situado justo frente a recepción.
                                </p>
                                <i className="bi bi-person-check-fill"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Certificado DS</h4>
                                <p>
                                    Al trabajar directamente con menores, debes enviar obligatoriamente a la técnico tu Certificado Negativo de Delitos Sexuales actualizado de forma semestral.
                                </p>
                                <i className="bi bi-file-earmark-x"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Horario</h4>
                                <p>
                                    La actividad se realiza de 18:00 a 20:00 en verano y de 17:30 a 19:30 el resto del año, los martes, jueves y viernes bajo un turno rotativo de 2 veces al mes.
                                </p>
                                <i class="bi bi-clock"></i>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}