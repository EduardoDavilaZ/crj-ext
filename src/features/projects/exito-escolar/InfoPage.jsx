import MainLayout from '../../../layouts/MainLayout';

export default function InfoPage() {
    return (
        <MainLayout>
            <div className='container'>
                <h1 className='h1'>Promoción del Éxito Escolar</h1>
                <p className='subtitle'>
                    Impulsamos el futuro de la infancia mediante apoyo educativo, meriendas y un espacio seguro para aprender y crecer.
                </p>

                <section>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h2 className='h2'>¿Qué se hace?</h2>
                            <p>
                                Acompañamiento escolar en centros educativos durante las tardes del curso lectivo para mejorar el rendimiento académico y reducir el abandono escolar.
                            </p>
                            <ul>
                                <li><strong>Refuerzo escolar</strong>: Apoyo personalizado en la realización de deberes y explicación de asignaturas clave como matemáticas, lengua e inglés.</li>
                                <li><strong>Ocio y tiempo libre</strong>: Talleres socioeducativos, juegos cooperativos y dinámicas grupales para fomentar habilidades sociales y compañerismo.</li>
                                <li><strong>Meriendas saludables</strong>: Espacios de convivencia donde compartir una merienda equilibrada y fomentar hábitos de vida saludables.</li>
                            </ul>
                        </div>

                        <div className='col-12 col-md-6 center'>
                            <img src="https://fotografias-2.larazon.es/clipping/cmsimages01/2026/06/27/6B5C5BAD-AC82-46B8-A852-21C23BC3E92F/cruz-roja-cierra-curso-escolar-mas-2000-jovenes-atendidos-provincia-leon_60.jpg?crop%3D799%2C449%2Cx0%2Cy0%26width%3D640%26height%3D360%26optimize%3Dmedium%26format%3Dwebply" alt="crj" className='shadow-md rounded-2 w-75' />
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
                                    Cada semana consultaremos tu disponibilidad para organizar el cuadrante de turnos. No olvides firmar la hoja de control al llegar al colegio.
                                </p>
                                <i className="bi bi-list-check"></i>
                            </div>
                        </div>
                        
                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Ropa de CRJ</h4>
                                <p>
                                    Es obligatorio acudir uniformados con la indumentaria oficial. Si te hace falta un chaleco de Cruz Roja Juventud, dispondrás de ellos en el centro.
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
                                    Los días y franjas horarias de las sesiones de apoyo se fijan al inicio de cada curso escolar en función de la disponibilidad del voluntariado.
                                </p>
                                <i className="bi bi-clock"></i>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}