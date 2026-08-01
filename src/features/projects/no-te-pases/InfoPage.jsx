import MainLayout from '../../../layouts/MainLayout';

export default function InfoPage() {
    return (
        <MainLayout>
            <div className='container'>
                <h1 className='h1'>No Te Pases</h1>
                <p className='subtitle'>
                    ¡Promovemos la fiesta segura! Espacios dinámicos y divertidos para disfrutar del ocio con cabeza
                </p>

                <section>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h2 className='h2'>¿Qué se hace?</h2>
                            <p>
                                Nos plantamos en el corazón de los botellones, institutos y recintos feriales con un espacio propio para conectar con la juventud y fomentar un ocio nocturno libre de riesgos.
                            </p>
                            <ul>
                                <li><strong>Dinamización</strong>: Dinamizamos sobre el consumo de sustancias haciendo juegos interactivos, pruebas y actividades lúdicas muy llamativas para atraer a todo el mundo.</li>
                                <li><strong>Sensibilización</strong>: Hablamos sobre el uso de sustancias y sus consecuencias reales, informando sin rodeos y promoviendo la fiesta segura y la autoprotección.</li>
                            </ul>
                        </div>

                        <div className='col-12 col-md-6 center'>
                            <img src="https://ondacerosur.es/wp-content/uploads/2024/09/CR-2.jpg" alt="crj" className='shadow-md rounded-2 w-50' />
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
                                    Días antes del evento se pasarán los cuadrantes y horarios exactos de los turnos por cubrir. ¡Apunta tu disponibilidad con tiempo!
                                </p>
                                <i className="bi bi-list-check"></i>
                            </div>
                        </div>
                        
                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Ropa de CRJ</h4>
                                <p>
                                    Es obligatorio ir identificados. Si te hace falta chaleco oficial o camiseta, te lo proporcionamos sin problema.
                                </p>
                                <i className="bi bi-person-check-fill"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Material lúdico</h4>
                                <p>
                                    Llevamos gafas de simulación, ruletas, juegos de mesa y dinámicas interactivas listas para romper el hielo y conectar con la gente.
                                </p>
                                <i className="bi bi-controller"></i>
                            </div>
                        </div>

                        <div className='col p-4'>
                            <div className='info-card row'>
                                <h4>Ubicación</h4>
                                <p>
                                    Nos instalamos estratégicamente en recintos feriales, zonas de ocio nocturno, botellones y centros educativos.
                                </p>
                                <i className="bi bi-geo-alt-fill"></i>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}