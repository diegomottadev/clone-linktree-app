import React from "react";
import "./Result.css";
import './../HiperLink/HyperLink.css';

import Accordion from "../Accordion";
import { Link, useNavigate } from "react-router-dom";

const Result = ({ currentLanguage  }) => {
    const navigate = useNavigate();

    const onClickHome = (event) => {
        event.preventDefault();
        navigate("/")
    }
    const accordionData = [
        {
            title: 'Dura Digital',
            content: [
                'Trabajé en Launch360, una plataforma SaaS de encuestas de feedback 360° y desarrollo organizacional. Mi rol fue mucho más allá de simplemente "desarrollar funcionalidades":',
                '📌Arquitectura del producto: Desarrollé y mantuve una API en Laravel y una SPA en Vue.js, diseñada para organizaciones multi-tenant con acceso basado en roles.',
                '📌Integraciones de terceros: Integré APIs como Square (pagos, suscripciones y facturación), SurveyMonkey (distribución de encuestas y recolección de respuestas) y Auth0 (autenticación).',
                '📌Motor de reportes: Desarrollé un motor dinámico capaz de generar archivos PDF mediante renderizado del lado del servidor con Blade y Browsershot, además de exportaciones CSV en streaming con chunked processing.',
                '📌Performance de la API: Optimicé mediante caché de endpoints, eager loading y colas de trabajos diferidos utilizando patrones de polling para operaciones asíncronas.',
                '📌Tiempo real: Implementé funcionalidades utilizando WebSockets con Pusher y Laravel Echo para actualizar en vivo el estado de las encuestas.',
                '📌DevOps: Gestioné despliegues containerizados utilizando Docker.',
                '🔗https://launch-360.com/'
            ],
        },
        {
            title: 'Lirmi',
            content: [
                'Colaboré con el equipo encargado del mantenimiento y la evolución de una plataforma integral para la gestión escolar, orientada a facilitar la labor de docentes, estudiantes y familias.',
                'Mi trabajo se enfocó en la identificación y resolución de errores técnicos, así como en el desarrollo de nuevas funcionalidades que mejoran la experiencia del usuario. Utilicé tecnologías como PHP, Laravel, Vue.js, JavaScript y PostgreSQL para intervenir tanto en el backend como en el frontend. Entre mis responsabilidades estuvieron:',
                '📌Desarrollo de componentes interactivos: para mejorar la usabilidad de la plataforma.',
                '📌Optimización de consultas y estructuras de base de datos: para mejorar el rendimiento.',
                '📌Mejora de procesos clave: alineando siempre las soluciones con los objetivos del producto y las necesidades reales de los usuarios.',
                '🔗https://www.lirmi.com/'
            ],
        },
        {
          title: 'Grupo Laken',
          content: [
            'Soluciones de salud y logística para distribución farmacéutica, dispensación médica y automatización de atención al paciente. Stack: PHP, Laravel, Symfony, Doctrine, Angular, TypeScript, SQL Server, MySQL y Docker.',
            '📌Plataforma farmacéutica: Gestión y trazabilidad de medicamentos con Laravel y Angular para operaciones a gran escala en Argentina.',
            '📌Logística: Cálculos automáticos de tiempos de entrega, validación de pedidos, control de stock y coordinación entre farmacias, transportistas y pacientes.',
            '📌Medicamentos para diabéticos: Sistema de gestión de solicitud de medicamentos para pacientes diabéticos en centros de salud.',
            '📌Dispensación: Validación de recetas electrónicas, gestión de inventario y coordinación de dispensación para mejorar la trazabilidad operativa.',
            '📌Cotizaciones: Plataforma de licitaciones con flujos automatizados, circuitos de aprobación por rentabilidad y exportación PDF/Excel.',
            '📌Bot WhatsApp: Automatización de consultas médicas integrando servicios de terceros.',
            '📌Atención al paciente: Lógica para coordinar retiros en farmacia y entregas a domicilio según historial y condición del paciente.',
          ],
        },
        {
            title: 'Club Pedidos',
            content: [
             'En Club Pedidos, contribuí al desarrollo de una avanzada plataforma de pedidos en línea con integración de chatbot de WhatsApp. Mi labor mejoró la eficiencia de los pedidos y la comunicación con los clientes dentro del chatbot, además de gestionar y almacenar información de los pedidos en la plataforma para que la empresa contratante tomara decisiones basadas en estadísticas. Gracias a los diversos requisitos que desarrollé, optimizaciones de código y diseño de interfaz, la empresa pudo lanzarse con éxito al mercado y obtener más de 2 clientes potenciales por mes a través de sus campañas de marketing.',
             '🔗https://clubpedidos.com'
            ],
        },

        {
            title: 'Marandú Comunicaciones',
            content: [
                'Participé en el diseño, desarrollo e implementación de plataformas web para el sector público de la provincia de Misiones.',
                '🔗https://paf.misiones.gob.ar: PAF — conecta productores regionales con consumidores de toda la provincia. Disponible también en Android.',
                '🔗https://rutadelayerbamate.com.ar: Ruta de la Yerba Mate — plataforma turística que recorre establecimientos artesanales e industriales del proceso productivo. Disponible también en Android.',
                '🔗https://cuenca.marandu.com.ar: SUGI — sistema de gestión para la Cuenca Ovino-Caprina con control de stock, afiliaciones y trazabilidad punto a punto desde el productor hasta la comercialización.',
                '🔗https://guacurari.misiones.gov.ar/: Guacurarí — plataforma de gestión escolar para escuelas técnicas. Desarrollé el módulo de mensajería segmentada con seguimiento de lectura, mejorando la comunicación entre estudiantes, familias y docentes.',
            ],
        },
        {
            title: 'Patagonia Dreams',
            content: [
                'Durante mi colaboración en Patagonia Dreams fue el desarrollo y mantenimiento de un sistema de gestión web para planificar estadías y excursiones, mi contribución se enfocó en añadir funcionalidades que calcularan el precio de las excursiones según la temporada (baja o alta), la inclusión de desayuno o almuerzo, si era una excursión privada o en grupo, y la disponibilidad para realizarla, así como la generación de diversos reportes. Estas mejoras permitieron una organización más eficiente en la compra de excursiones y mejoraron significativamente la experiencia del usuario al planificar sus viajes, además de proporcionar más datos de control para el agente de viaje.',
                '🔗https://www.patagoniadreams.com.ar/'
            ], 
        },
        {
            title: 'Misiones Online',
            content: [
                'Durante mi tiempo en Misiones Online, trabajé como Desarrollador Web Fullstack PHP dentro del Departamento de Sistemas, contribuyendo al desarrollo y mantenimiento de plataformas internas utilizadas en operaciones, marketing y gestión publicitaria.',
                '📌Gestión de tareas: Desarrollé y mantuve un sistema interno utilizado para asignar actividades y enviar notificaciones automáticas a empleados según su departamento y responsabilidades.',
                '📌CRM: Contribuí al desarrollo de una plataforma enfocada en la gestión de contactos, campañas de comunicación, concursos, iniciativas de marketing y distribución masiva de correos electrónicos.',
                '📌SGMOL: Trabajé en un sistema de gestión publicitaria que permitía a las empresas administrar formatos de banners, cargar materiales publicitarios, configurar la frecuencia de campañas en distintos medios y gestionar pagos.',
                '📌Stack tecnológico: Colaboré tanto en backend como frontend utilizando PHP, JavaScript, jQuery, HTML, CSS y MySQL dentro de sistemas legacy y en evolución.',
                '📌Impacto: Ayudé a mejorar los flujos de trabajo internos, la usabilidad de los sistemas y la eficiencia operativa en múltiples áreas del negocio.',
            ],
        },

        {
            title: 'Ministerio de Salud Pública de la Provincia de Misiones',
            content: [
                'Mi colaboración en esta institución tuvo un impacto positivo al desarrollar un módulo dentro del sistema “Programa Sumar” para el seguimiento cronológico de pacientes, como embarazadas y personas con tratamientos médicos. Si un paciente no cumplía con el seguimiento médico, el sistema enviaba alertas a los usuarios para que se comunicaran con ellos y se aseguraran de que volvieran a cumplir con su revisión o chequeo médico, garantizando así su bienestar.'
            ],
        },
      ];


      const accordionDataEn = [
        {
          title: 'Dura Digital',
          content: [
            'I worked on Launch360, a SaaS platform for 360° feedback surveys and organizational development. My role went far beyond simply "developing features":',
            '📌Product architecture: I developed and maintained an API in Laravel and a SPA in Vue.js, designed for multi-tenant organizations with role-based access.',
            '📌Third-party integrations: I integrated APIs such as Square (payments, subscriptions, and billing), SurveyMonkey (survey distribution and response collection), and Auth0 (authentication).',
            '📌Reporting engine: I developed a dynamic engine capable of generating PDF files via server-side rendering using Blade and Browsershot, along with streaming CSV exports with chunked processing.',
            '📌API performance: I optimized through endpoint caching, eager loading, and deferred job queues using polling patterns for asynchronous operations.',
            '📌Real-time features: I implemented functionality using WebSockets with Pusher and Laravel Echo to live-update survey status.',
            '📌DevOps: I managed containerized deployments using Docker.',
            '🔗https://launch-360.com/'
          ],
        },
        {
          title: 'Lirmi',
          content: [
            'I collaborated with the team responsible for maintaining and evolving a comprehensive school management platform designed to support teachers, students, and families.',
            'My work focused on identifying and resolving technical issues, as well as developing new features that enhance the user experience. I used technologies such as PHP, Laravel, Vue.js, JavaScript, and PostgreSQL to work on both the backend and frontend. My responsibilities included:',
            '📌Interactive component development: to improve platform usability.',
            '📌Query and database structure optimization: to enhance performance.',
            '📌Key process improvements: consistently aligning solutions with product goals and the real needs of users.',
            '🔗https://www.lirmi.com/'
          ],
        },
        {
          title: 'Laken Group',
          content: [
            'Health and logistics solutions for pharmaceutical distribution, medical dispensing, and patient care automation. Stack: PHP, Laravel, Symfony, Doctrine, Angular, TypeScript, SQL Server, MySQL, and Docker.',
            '📌Pharmaceutical platform: Medication management and traceability with Laravel and Angular for large-scale operations in Argentina.',
            '📌Logistics: Automatic delivery time calculations, order validation, stock control, and coordination between pharmacies, carriers, and patients.',
            '📌Diabetes medication: Medication request management system for diabetic patients in health centers.',
            '📌Dispensing: Electronic prescription validation, inventory management, and dispensing coordination to improve operational traceability.',
            '📌Quotes & tenders: Tendering platform with automated quoting flows, profitability-based approval circuits, and PDF/Excel export.',
            '📌WhatsApp bot: Medical consultation automation integrating third-party services.',
            '📌Patient care: Logic to coordinate pharmacy pickups and home deliveries based on patient history and condition.',
          ],
        },
        {
          title: 'Club Pedidos',
          content: [
            'At Club Pedidos, I contributed to the development of an advanced online order platform with WhatsApp chatbot integration. My work improved order efficiency and communication with customers within the chatbot, as well as managing and storing order information on the platform for the hiring company to make decisions based on statistics. Thanks to the various requirements I developed, code optimizations, and interface design, the company was able to successfully launch into the market and obtain over 2 potential customers per month through their marketing campaigns.'
          ],
        },
      
        {
          title: 'Marandú Communications',
          content: [
            'I participated in the design, development, and implementation of web platforms for the public sector in the province of Misiones.',
            '🔗https://paf.misiones.gob.ar: PAF — connects regional producers with consumers across the province. Also available on Android.',
            '🔗https://rutadelayerbamate.com.ar: Yerba Mate Route — tourism platform covering artisanal and industrial production sites. Also available on Android.',
            '🔗https://cuenca.marandu.com.ar: SUGI — management system for the Ovine-Caprine Basin with stock control, affiliations, and end-to-end traceability from producer to market.',
            '🔗https://guacurari.misiones.gov.ar/: Guacurarí — school management platform for technical schools. I developed the segmented messaging module with read tracking, improving communication between students, families, and teachers.',
          ],
        },
        {
          title: 'Patagonia Dreams',
          content: [
            'During my collaboration with Patagonia Dreams, I worked on the development and maintenance of a web management system for planning stays and excursions. My contribution focused on adding functionalities that calculate the price of excursions based on the season (low or high), the inclusion of breakfast or lunch, whether it was a private or group excursion, and availability to perform it. It also included generating various reports. These improvements allowed for more efficient organization of excursion purchases and significantly improved the user experience in planning their trips, while providing more control data for the travel agent.'
          ],
        },
        {
          title: 'Misiones Online',
          content: [
            'During my time at Misiones Online, I worked as a Fullstack PHP Web Developer within the Systems Department, contributing to the development and maintenance of internal platforms used across operations, marketing, and advertising management.',
            '📌Task management: I developed and maintained an internal system used to assign tasks and send automatic notifications to employees based on their department and responsibilities.',
            '📌CRM: I contributed to the development of a platform focused on contact management, communication campaigns, contests, marketing initiatives, and mass email distribution.',
            '📌SGMOL: I worked on an advertising management system that allowed companies to manage banner formats, upload ad materials, configure campaign frequency across different media, and handle payment management.',
            '📌Tech stack: I collaborated on both backend and frontend using PHP, JavaScript, jQuery, HTML, CSS, and MySQL within legacy and evolving systems.',
            '📌Impact: I helped improve internal workflows, system usability, and operational efficiency across multiple areas of the business.',
          ],
        },
      
        {
          title: 'Ministry of Public Health of the Province of Misiones',
          content: [
            'My collaboration with this institution had a positive impact by developing a module within the "Sumar Program" system for the chronological tracking of patients, such as pregnant women and individuals with medical treatments. If a patient did not comply with medical follow-up, the system sent alerts to users to contact them and ensure they returned for their medical review or check-up, thus ensuring their well-being.'
          ],
        },
      ];
      

      return (
        <div>
            <div className='title'>
                {currentLanguage  === 'es' ? <b>{'<Trayectoria/>'}</b>:<b>{'<Career/>'}</b> }
            </div>
            <div className="result-box">
                {currentLanguage  === 'es' ? 
  


                accordionData.map((item, index) => (
                    <Accordion key={index} title={item.title} content={item.content} />
                )):
                
                accordionDataEn.map((item, index) => (
                    <Accordion key={index} title={item.title} content={item.content} />
                ))}
            </div>
            <div className="links">
                <Link className="link" onClick={(e) => onClickHome(e)}>
                    <i className="fa fa-chevron-circle-left">&nbsp;</i>Volver
                </Link>
            </div>
        </div>
        
      );

}


export default Result;
