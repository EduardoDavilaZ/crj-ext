import MainLayout from '../../../layouts/MainLayout';

export default function InfoPage() {
    return (
        <MainLayout>
    <div className='container'>
        <h1 className='h1'>El Juguete Educativo</h1>
        <p className='subtitle'>
            Garantizamos el derecho al juego de los niños y niñas en situación de vulnerabilidad mediante la sensibilización, recogida y entrega de ilusión.
        </p>

        <section>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <h2 className='h2'>¿Qué se hace?</h2>
                    <p>
                        Lideramos una gran campaña solidaria para asegurar que ningún hogar se quede sin sonrisas, movilizando a la ciudadanía en favor de la infancia.
                    </p>
                    <ul>
                        <li><strong>Sensibilización</strong>: Concienciamos a la sociedad sobre el valor educativo y transformador del juego en el desarrollo evolutivo de la infancia.</li>
                        <li><strong>Recogida</strong>: Instalamos puntos estratégicos de donación e informamos pie de calle para motivar la participación ciudadana y conseguir el mayor número de juegos.</li>
                        <li><strong>Clasificación y empaquetado</strong>: Preparamos, revisamos y envolvemos cada regalo con sumo cuidado para que luzca perfecto y mágico en su entrega.</li>
                        <li><strong>Entrega de juguetes</strong>: Hacemos realidad la magia repartiendo directamente los detalles solidarios a las familias que más lo necesitan.</li>
                    </ul>
                </div>

                <div className='col-12 col-md-6 center'>
                    <img src="https://www.latribunadeciudadreal.es/media/IMG/2023/6E52C451-DA0F-38EF-B34C6BA07ED4128A.JPG" alt="crj" className='shadow-md rounded-2 w-75' />
                </div>
            </div>
        </section>

        <section>
            <h2 className='h2'>¿Qué debo tener en cuenta?</h2>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                
                <div className='col p-4'>
                    <div className='info-card row'>
                        <h4>Fechas Clave</h4>
                        <p>
                            El corazón de esta campaña late fuerte desde el mes de diciembre hasta la mágica jornada del Día de Reyes. ¡Estate atento a los plazos!
                        </p>
                        <i className="bi bi-calendar-event"></i>
                    </div>
                </div>
                
                <div className='col p-4'>
                    <div className='info-card row'>
                        <h4>Puntos de Información</h4>
                        <p>
                            Nos organizamos por turnos dinámicos en mesas informativas para involucrar a la ciudadanía y animar a la donación masiva de juguetes.
                        </p>
                        <i class="bi bi-info-circle"></i>
                    </div>
                </div>

                <div className='col p-4'>
                    <div className='info-card row'>
                        <h4>Requisitos del Juguete</h4>
                        <p>
                            Por normativa y calidad, todos los artículos donados deben ser estrictamente nuevos, no bélicos, no sexistas, cooperativos y sostenibles.
                        </p>
                        <i className="bi bi-gift"></i>
                    </div>
                </div>

                <div className='col p-4'>
                    <div className='info-card row'>
                        <h4>Uniformidad y Apoyo</h4>
                        <p>
                            Es indispensable acudir debidamente identificados con la ropa oficial de Cruz Roja Juventud para transmitir confianza y cercanía en los puntos.
                        </p>
                        <i className="bi bi-shield-check"></i>
                    </div>
                </div>

            </div>
        </section>
    </div>
</MainLayout>
    );
}