export default {
    slug: 'espacios-educativos',
    projectTitle: 'Espacios Educativos Saludables',
    form: {
        subtitle: 'Formulario de inscripción para las actividades del proyecto.',
        schedule: 'Horario: 9:30 - 14:00',
        shiftNote:
            '* Nota: Solo puedes seleccionar un centro por día. Si hubiera algún cambio en el cuadrante te lo haré saber.',
        disableSubmitWhenSubmitting: true,
    },
    info: {
        title: 'Espacios Educativos Saludables',
        subtitle: 'Espacios de ocio y refuerzo educativo orientados a la infancia',
        whatWeDo: {
            description:
                '¿Te apasiona transformar la realidad de la infancia en Badajoz? Únete a nuestro equipo y regala sonrisas, apoyo y momentos inolvidables en los colegios de la ciudad. ¡Tu participación cambia vidas!',
            items: [
                {
                    label: 'Refuerzo educativo',
                    text: 'Acompaña a los más pequeños en sus tareas escolares diarias, ayudándoles a comprender y disfrutar de asignaturas clave como matemáticas, lengua e inglés.',
                },
                {
                    label: 'Ocio y tiempo libre',
                    text: 'Disfruta al aire libre organizando dinámicas grupales, juegos tradicionales y divertidas actividades deportivas diseñadas para fomentar su compañerismo.',
                },
                {
                    label: 'Excursiones',
                    text: 'Forma parte de salidas lúdicas y culturales inolvidables a piscinas, museos y al Parque de la Legión dentro del programa municipal "Vive el Verano".',
                },
            ],
        },
        image: {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeDHV5GpgbcOnb-kItBzfBl9r6mLx6pOfYNI8opQPzQHoY6ikZlO7dRQ&s=10',
            widthClass: 'w-75',
        },
        infoCards: [
            {
                title: 'Asistencia',
                description:
                    'El formulario de asistencia se activa cada viernes a mediodía. El cuadrante se genera automáticamente. No olvides rellenar la hoja de firmas al llegar al colegio.',
                icon: 'bi-list-check',
            },
            {
                title: 'Ropa de CRJ',
                description:
                    'Disponemos de chalecos en cada centro para quienes lo necesiten. Su uso resulta obligatorio durante toda la actividad y no deben llevarse a casa.',
                icon: 'bi-person-check-fill',
            },
            {
                title: 'Certificado DS',
                description:
                    'Al trabajar con menores, debes enviar a la técnico tu Certificado Negativo de Delitos Sexuales actualizado de forma semestral sin excepción.',
                icon: 'bi-file-earmark-x',
            },
            {
                title: 'Incidencias',
                description:
                    'Si surge cualquier imprevisto con algún menor o docente, comunícalo de inmediato al personal responsable, técnico o consejo local.',
                icon: 'bi-people',
            },
        ],
    },
};
