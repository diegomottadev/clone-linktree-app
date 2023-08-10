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
          title: 'Grupo Laken',
          content: [
            'Mi participación actualmente en Grupo Lafken me ha llevado a resultados de optimización en la logística, comercialización y consultoría de medicamentos especiales y de alta complejidad, beneficiando a pacientes y profesionales de la salud:',
            '📌Botiquines: desarrollo e implementación del control de stock de la medicación que es enviada desde las farmacias y recepcionadas en Sanatorio Franchin (Buenos Aires) para los pacientes que deben ser internados con una fecha propuesta para la ejecución de su tratamiento. Permitiendo tambien la asignación y/o reasignación de medicación asociado a un nuevo expediente.',
            'La implementación aseguró al Sanatorio Francin que la medicación esté disponible y en la cantidad adecuada en el momento en que se necesita. Esto contribuye a mejorar la seguridad del paciente y la precisión en la entrega de tratamientos.',
            '📌SMS masivo: desarrolle un proceso background de validación de contactos de pacientes de una prestadora de salud mediante el envío de SMS, en donde se establecía una serie de respuestas esperadas y acciones a ejecutar  según la respuesta enviada por el paciente, para proceder su validación y almacenamiento en una base de datos.',
            'Mediante el uso de respuestas predefinidas y acciones programadas, se logró automatizar el proceso de validación. Esto ahorra tiempo y recursos al eliminar la necesidad de intervención manual en cada caso, lo que a su vez reduce posibles errores humanos.',
            '📌API de Liquidaciones: Se necesitaba mejorar la integración de las liquidaciones de la prestadora de salud UOCRA en el sistema integral de la empresa, lo que dificultaba la recepción y validación de datos clave.',
            'Desarrollé la integración de la API de Liquidaciones de UOCRA en nuestro sistema. Esta integración permitió la transferencia de liquidaciones en formato JSON, incluyendo fechas, detalles de medicamentos y costes, al Sistema UOCRA. Implementé una rigurosa validación de las respuestas del sistema, incorporando validaciones específicas y la interpretación de códigos de respuesta, determinando si las liquidaciones están completas, incompletas o inexistentes.',
            'Como resultado, esta integración proporcionó claridad sobre su integridad, informa de manera precisa al área de contabilidad, asegurando decisiones informadas y eficientes en relación a las liquidaciones recibidas.,',
            '📌Webtrackig - Módulo Producto No Retira: La gestión de pedidos en las farmacias de la red de la empresa requería una mejora en la eficiencia y la comunicación con los pacientes.',
            'Carecía de un sistema sistematizado para seguir y gestionar los pedidos entregados en farmacias y los pendientes de retirada por parte de los pacientes, lo que dificultaba la toma de decisiones y la comunicación',
            'Desarrolle el nuevo Módulo de “Producto No Retira” dentro de la plataforma “Web Tracking”, una herramienta innovadora que optimiza el seguimiento y la gestión de pedidos. Implementando web services y procesos background para envio de notificaciones vía WhatsApp para informar a los pacientes sobre la disponibilidad de sus medicamentos, con opciones para elegir.',
            'Como resultado, se ha mejorado la gestión de pedidos, aumentado la eficiencia y logrado un seguimiento más efectivo de los casos, lo que ha impactado positivamente en la gestión general del proceso. '
          ],
        },
        {
            title: 'Club Pedidos',
            content: [
             'En Club Pedidos, contribuí al desarrollo de una avanzada plataforma de pedidos en línea con integración de chatbot de WhatsApp. Mi labor mejoró la eficiencia de los pedidos y la comunicación con los clientes dentro del chatbot, además de gestionar y almacenar información de los pedidos en la plataforma para que la empresa contratante tomara decisiones basadas en estadísticas. Gracias a los diversos requisitos que desarrollé, optimizaciones de código y diseño de interfaz, la empresa pudo lanzarse con éxito al mercado y obtener más de 10 clientes potenciales por mes a través de sus campañas de marketing.'
            ], // Puedes agregar más objetos al arreglo para más acordeones
        },

        {
            title: 'Marandú Comunicaciones',
            content: [
             'Durante mi tiempo en Marandú Comunicaciones, participé en la implementación de diversos proyectos web para el sector público',
             '🔗https://paf.misiones.gob.ar: Diseño, desarrollo e implementación de la plataforma de Productos de la Agricultura Familiar de Misiones (PAF). Con PAF cualquier persona de la provincia de Misiones puede encontrar los productores regionales, ver los productos que venden, donde lo pueden encontrar y ponerse en contacto. La plataforma web está disponible tambien para smartphone con sistema operativo Android.',
             '🔗https://rutadelayerbamate.com.ar: Diseño, desarrollo e implementación de la plataforma de La Ruta de la Yerba Mate, que  conduce a los viajeros a recorrer establecimientos artesanales, ecológicos e industriales, en los que se puede conocer el proceso completo de producción, desde las extensas plantaciones pasando por la cosecha, el secado, la molienda y el envasado del producto final. La plataforma web está disponible tambien para smartphone con sistema operativo Android.',
             '🔗https://cuenca.marandu.com.ar: Diseño, desarrollo e implementación del “Sistema Único de Gestión de Información” (SUGI) para uso de los productores de la Cuenca Ovino-Caprina Zona Sur de la provincia de Misiones.',
             'La aplicación web incluye la actualización del stock de animales online, también el estado de afiliación del productor a los distintos registros y la posibilidad de consignar las altas y bajas de ejemplares para las transacciones comerciales.',
             'La aplicación permitió a los organismos que trabajan en la Cuenca para eficientizar el control y la asistencia técnica necesaria con los equipos técnicos. A través de él se puede validar la oferta del producto, el origen y la trazabilidad del mismo, ya que es gestionada punto a punto, desde el productor a las procesadoras habilitadas (mataderos) y los comercializadores del producto (carne con las debidas certificaciones).',
             '🔗https://guacurari.misiones.gov.ar/: La Plataforma Guacurarí es un sistema web de gestión escolar y comunicación, que contribuyo mediante producción y uso de contenidos educativos en formatos digitales que fomentan la interacción entre los docentes y los estudiantes como así optimizar la forma de trabajo de las escuelas técnicas de la provincia de Misiones. Mi principal contribución se centró en mejorar y desarrollar el módulo de mensajería segmentada con seguimiento de lectura, dando lugar a la creación de un canal directo con la comunidad educativa, mejorando la comunicación entre estudiantes, padres y profesores'
            ], // Puedes agregar más objetos al arreglo para más acordeones
        },
        {
            title: 'Patagonia Dreams',
            content: [
                'Durante mi colaboración en Patagonia Dreams fue el desarrollo y mantenimiento de un sistema de gestión web para planificar estadías y excursiones, mi contribución se enfocó en añadir funcionalidades que calcularan el precio de las excursiones según la temporada (baja o alta), la inclusión de desayuno o almuerzo, si era una excursión privada o en grupo, y la disponibilidad para realizarla, así como la generación de diversos reportes. Estas mejoras permitieron una organización más eficiente en la compra de excursiones y mejoraron significativamente la experiencia del usuario al planificar sus viajes, además de proporcionar más datos de control para el agente de viaje.'
            ], 
        },
        {
            title: 'Misiones Online',
            content: [
                'En Misiones Online desarrollé desde cero una aplicación web de gestión de incidentes para el área de dirección de la empresa, para mejoramiento de la comunicación interna con las demás áreas. Mi trabajo contribuyó al orden y seguimiento de incidentes, aumentó la productividad interna y expandió la comunicación con los usuarios de las áreas de sistemas, comercial, prensa y redes sociales.'
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
          title: 'Laken Group',
          content: [
            'My current involvement with the Laken Group has led to optimization results in the logistics, marketing, and consulting of special and highly complex medications, benefiting patients and healthcare professionals:',
            '📌First Aid Kits: development and implementation of medication stock control that is sent from pharmacies and received at Sanatorio Franchin (Buenos Aires) for patients who need to be hospitalized with a proposed date for their treatment execution. Also allowing the assignment and/or reassignment of medication associated with a new case.',
            'The implementation ensured that Sanatorio Francin has the medication available and in the appropriate quantity when needed. This contributes to improving patient safety and accuracy in treatment delivery.',
            '📌Massive SMS: I developed a background process for validating patient contacts of a healthcare provider through SMS, where a series of expected responses and actions were established based on the patient\'s response to proceed with their validation and storage in a database.',
            'Through predefined responses and programmed actions, the validation process was automated. This saves time and resources by eliminating the need for manual intervention in each case, reducing potential human errors.',
            '📌API for Billing: There was a need to improve the integration of billings from the UOCRA healthcare provider into the company\'s integrated system, which made it difficult to receive and validate key data.',
            'I developed the integration of the UOCRA Billing API into our system. This integration allowed the transfer of billings in JSON format, including dates, medication details, and costs, to the UOCRA System. I implemented rigorous validation of the system\'s responses, incorporating specific validations and interpretation of response codes, determining whether billings are complete, incomplete, or non-existent.',
            'As a result, this integration provided clarity about its integrity, accurately informs the accounting area, ensuring informed and efficient decisions regarding the received billings.',
            '📌Web Tracking - Non-Withdrawal Product Module: Order management in the company\'s pharmacy network required improvement in efficiency and communication with patients.',
            'It lacked a system for tracking and managing orders delivered to pharmacies and those pending withdrawal by patients, which made decision-making and communication difficult.',
            'I developed the new "Non-Withdrawal Product" module within the "Web Tracking" platform, an innovative tool that optimizes order tracking and management. Implementing web services and background processes for sending WhatsApp notifications to inform patients about the availability of their medications, with options to choose from.',
            'As a result, order management has been improved, efficiency has been increased, and more effective tracking of cases has been achieved, which has had a positive impact on the overall management process.'
          ],
        },
        {
          title: 'Club Pedidos',
          content: [
            'At Club Pedidos, I contributed to the development of an advanced online order platform with WhatsApp chatbot integration. My work improved order efficiency and communication with customers within the chatbot, as well as managing and storing order information on the platform for the hiring company to make decisions based on statistics. Thanks to the various requirements I developed, code optimizations, and interface design, the company was able to successfully launch into the market and obtain over 10 potential customers per month through their marketing campaigns.'
          ],
        },
      
        {
          title: 'Marandú Communications',
          content: [
            'During my time at Marandú Communications, I participated in the implementation of various web projects for the public sector.',
            '🔗https://paf.misiones.gob.ar: Design, development, and implementation of the Familiar Agriculture Products Platform of Misiones (PAF). With PAF, anyone in the province of Misiones can find regional producers, see the products they sell, where they can find them, and get in touch. The web platform is also available for smartphones with the Android operating system.',
            '🔗https://rutadelayerbamate.com.ar: Design, development, and implementation of the Yerba Mate Route platform, which leads travelers to visit artisanal, ecological, and industrial establishments, where they can learn about the complete production process, from extensive plantations to harvesting, drying, grinding, and packaging of the final product. The web platform is also available for smartphones with the Android operating system.',
            '🔗https://cuenca.marandu.com.ar: Design, development, and implementation of the "Unique Information Management System" (SUGI) for use by producers in the Southern Ovine-Caprine Basin Zone of the province of Misiones.',
            'The web application includes online animal stock updates, as well as the producer\'s affiliation status to various records and the ability to record additions and deletions of specimens for commercial transactions.',
            'The application allowed the organizations working in the Basin to streamline control and necessary technical assistance with technical teams. Through it, the product\'s offer, origin, and traceability can be validated, as it is managed point-to-point, from the producer to the authorized processors (slaughterhouses) and product marketers (certified meat).',
            '🔗https://guacurari.misiones.gov.ar/: The Guacurarí Platform is a web school management and communication system, which I contributed to by producing and using educational content in digital formats that promote interaction between teachers and students, as well as optimizing the working methods of technical schools in the province of Misiones. My main contribution focused on improving and developing the segmented messaging module with read tracking, creating a direct channel with the educational community, enhancing communication between students, parents, and teachers.'
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
            'At Misiones Online, I built a web incident management application from scratch for the company\'s management area, to enhance internal communication with other departments. My work contributed to the organization and tracking of incidents, increased internal productivity, and expanded communication with users from the systems, commercial, press, and social media areas.'
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
                {currentLanguage  === 'es' ? <b>{'</>Mis resultados'}</b>:<b>{'</>My results'}</b> }
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
