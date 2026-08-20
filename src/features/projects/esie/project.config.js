export default {
    slug: 'esie',
    projectTitle: 'ESIE',
    form: {
        subtitle:
            'Inscríbete para colaborar en los Equipos de Sensibilización e Información ante Emergencias.',
        schedule: ['Turno mañana: 10:00 - 14:00', 'Turno mañana: 16:00 - 20:00'],
        showVestQuestion: true,
    },
    info: {
        title: 'Equipos de Sensibilización e Información ante Emergencias (ESIE)',
        subtitle:
            'Los ESIE garantizan que se cumplan los derechos de la infancia en las emergencias, les informan y acompañan en todo momento.',
        whatWeDo: {
            description:
                'Actuamos de primera línea en catástrofes, desalojos y grandes crisis humanitarias, ofreciendo un entorno seguro y de confianza a los menores afectados.',
            items: [
                {
                    label: 'Espacios lúdicos',
                    text: 'Habilitamos zonas de juego y entretenimiento adaptadas para canalizar emociones, mitigar el miedo y devolver la alegría en situaciones críticas.',
                },
                {
                    label: 'Acompañamiento y apoyo',
                    text: 'Brindamos cercanía en las rutinas diarias, acompañándoles a comer o dándoles soporte mientras sus familias gestionan trámites burocráticos.',
                },
                {
                    label: 'Información adaptada',
                    text: 'Explicamos el proceso y la situación de emergencia con un lenguaje claro y accesible, ayudándoles a comprender lo que ocurre.',
                },
            ],
        },
        image: {
            src: 'https://www2.cruzroja.es/documents/510923428/0/ESIE_DANA_infancia_2+%281%29.jpg/b46adfe8-fd69-2b64-6e3a-25cf4c27461a?t=1732004789118',
            widthClass: 'w-75',
        },
        infoCards: [
            {
                title: 'Formación ESIE',
                description:
                    'Para participar activamente en el proyecto es obligatorio haber completado la formación específica ESIE. ¡Mantente atent@ a las próximas convocatorias!',
                icon: 'bi-mortarboard',
            },
            {
                title: 'Coordinación',
                description:
                    'Ante una emergencia, el voluntariado recibe una pre-alerta y la activación formal a través de canales oficiales si se requiere movilizar recursos.',
                icon: 'bi-megaphone',
            },
            {
                title: 'Certificado DS',
                description:
                    'Al intervenir de forma directa con la infancia en contextos vulnerables, debes aportar obligatoriamente el Certificado Negativo de Delitos Sexuales.',
                icon: 'bi-file-earmark-x',
            },
            {
                title: 'Disponibilidad',
                description:
                    'Las emergencias no avisan. Se valora la flexibilidad y capacidad de respuesta rápida ante despliegues humanitarios imprevistos.',
                icon: 'bi-exclamation-triangle',
            },
        ],
    },
};
