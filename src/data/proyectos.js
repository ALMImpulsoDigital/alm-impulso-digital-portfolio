export const proyectosWeb = [
  {
    titulo: "Sistema Web Pastelería Munay - EN DESARROLLO",
    descripcion:
      "Web comercial con catálogo, carrito, presupuestos personalizados y pagos online.",
    tipo: "video",
    thumbnail: "/assets/proyectos/webMunayPasteleria.png",
    tecnologias: [
      "React",
      "Firebase",
      "Firestore",
      "MercadoPago",
      "CSS",
    ],
  },

  {
    titulo: "Aplicación Web Taller Mecánico + App Móvil",
    descripcion: `Esta es una aplicación web desarrollada con ASP.NET Core (API REST), SQL Server y React + TypeScript, diseñada para optimizar la administración de un taller automotor multimarca. El sistema permite gestionar clientes, vehículos, tipos de servicios, órdenes de trabajo, pasos del proceso y presupuestos, ofreciendo una visión completa del flujo de cada reparación.

Incluye funcionalidades avanzadas como seguimiento por código único, y diferentes roles de usuario (administrador y mecánicos) con permisos personalizados. Además, dispone de un panel administrativo moderno construido con Material UI y una extensión de aplicación móvil desarrollada en Flutter, pensada para que los clientes puedan consultar el estado de su vehículo en tiempo real.

El proyecto combina seguridad, usabilidad y diseño responsivo, reflejando un enfoque profesional para la digitalización de procesos en talleres mecánicos.`,
    tipo: "vimeo",
    vimeoId: "1149453604",
    thumbnail: "/assets/proyectos/webTallerMecanico.png",
    tecnologias: [
      "ASP.NET Core",
      "Web API",
      "SQL Server",
      "Entity Framework",
      "React",
      "TypeScript",
      "Material UI",
      "Flutter",
    ],
  },

  {
    titulo: "Sistema Gestión de Canchas + App Móvil",
    descripcion: `Canchas Express es un sistema web integral para la gestión de reservas de canchas deportivas, desarrollado como proyecto final de la carrera Técnico Superior en Desarrollo Web y Aplicaciones Digitales.

El sistema permite a los administradores registrar, modificar y eliminar usuarios, canchas y reservas, mientras que los clientes pueden acceder con su cuenta, visualizar las canchas disponibles y gestionar sus propias reservas de forma intuitiva.

La aplicación está compuesta por un backend en ASP.NET Core con Entity Framework y SQL Server como base de datos relacional, y un frontend en React + Vite, que ofrece una interfaz moderna, responsiva y fácil de usar.

El sistema incorpora autenticación mediante JWT, roles de usuario (administrador y cliente), y medidas de seguridad como API Key y cookies seguras.

Fue diseñado bajo una arquitectura por capas, priorizando la organización, seguridad y escalabilidad del sistema.`,
    tipo: "vimeo",
    vimeoId: "1149454370",
    thumbnail: "/assets/proyectos/reservaCanchas.png",
    tecnologias: [
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
      "React",
      "Vite",
      "JWT",
      "API Key",
    ],
  },

  {
    titulo: "Sistema Web Hamburguesería",
    descripcion:
      "Esta aplicación web desarrollada en React permite gestionar hamburguesas, ingredientes y pedidos de manera dinámica. Se integra con Firebase para el almacenamiento y sincronización en tiempo real, ofreciendo operaciones CRUD en cada sección. Utiliza Material-UI para una interfaz moderna y React Router para una navegación fluida entre páginas.",
    tipo: "vimeo",
    vimeoId: "1149454390",
    thumbnail: "/assets/proyectos/webHamburgueseria.png",
    tecnologias: [
      "React",
      "Firebase",
      "Firestore",
      "Material UI",
      "React Router",
    ],
  },

  {
    titulo: "Web Repuestos",
    descripcion:
      "Este sistema web permite administrar clientes, productos y pedidos de un comercio electrónico. Utiliza React para la interfaz de usuario y Material UI para componentes visuales modernos. La base de datos está gestionada con Firebase. Los usuarios pueden listar, agregar, modificar y eliminar clientes, productos y pedidos. La interfaz cuenta con un diseño intuitivo, utilizando un menú lateral para acceder a las secciones, y diálogos de confirmación para evitar eliminaciones accidentales. Este sistema está pensado para optimizar la gestión de datos para comercios.",
    tipo: "vimeo",
    vimeoId: "1149454400",
    thumbnail: "/assets/proyectos/webRepuestos.png",
    tecnologias: [
      "React",
      "Firebase",
      "Firestore",
      "Material UI",
    ],
  },

  {
    titulo: "Web Gestión de Usuarios",
    descripcion:
      "Esta es una aplicación web interactiva que permite administrar una lista de usuarios en tiempo real. Los usuarios pueden ser añadidos, editados o eliminados, y el sistema calcula dinámicamente el promedio de edades. La información se obtiene desde la API pública JSONPlaceholder, y todas las operaciones se realizan directamente sobre el DOM sin recargar la página. Está desarrollado con HTML5 para la estructura, CSS3 para los estilos visuales, y JavaScript (ES6) para la lógica, utilizando fetch() para obtener los datos y forEach() para calcular promedios. El diseño incluye una tabla interactiva, formularios de edición y alta de usuarios, y una interfaz limpia con header y footer personalizados.",
    tipo: "vimeo",
    vimeoId: "1149454406",
    thumbnail: "/assets/proyectos/gestionUsuarios.png",
    tecnologias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Fetch API",
      "JSONPlaceholder API",
    ],
  },

  {
    titulo: "Sistema Web Pastelería",
    descripcion:
      "Este sistema web integra un backend en ASP.NET Core con una interfaz dinámica e intuitiva. Utiliza Web API y MVC para la gestión de clientes y productos, permitiendo realizar operaciones CRUD de forma eficiente. El frontend está desarrollado con HTML5, CSS3, JavaScript y jQuery, mientras que SQL Server junto con Entity Framework se encargan del manejo y persistencia de los datos mediante una conexión optimizada.",
    tipo: "vimeo",
    vimeoId: "1149483364",
    thumbnail: "/assets/proyectos/webPasteleria.png",
    tecnologias: [
      "ASP.NET Core",
      "Web API",
      "MVC",
      "SQL Server",
      "Entity Framework",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
    ],
  },

  {
    titulo: "Página Web Restaurante",
    descripcion:
      "Esta es una página web interactiva para un restaurante que permite gestionar una lista de compras de forma dinámica. Los usuarios pueden agregar productos, indicar cantidad y precio, y calcular automáticamente el total de la compra. Desarrollada con HTML5, CSS3 y JavaScript, la aplicación ofrece una interfaz clara y funcional que facilita la manipulación de datos sin recargar la página. Además, incluye estilos responsivos y elementos visuales adaptativos que mejoran la experiencia del usuario, convirtiéndose en una solución práctica para pequeños comercios o restaurantes.",
    tipo: "vimeo",
    vimeoId: "1149480548",
    thumbnail: "/assets/proyectos/restauranteRustica.png",
    tecnologias: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
];

export const proyectosMobile = [
  {
    titulo: "App Móvil Taller Mecánico",
    descripcion: `Esta aplicación móvil complementa el sistema web del taller, permitiendo a los clientes realizar el seguimiento en tiempo real del estado de su vehículo, así como aceptar o rechazar las recomendaciones realizadas por los mecánicos directamente desde el teléfono.

Está conectada a la misma base de datos SQL Server que utiliza la plataforma web, compartiendo la información de órdenes de trabajo, presupuestos, pasos de servicio y sugerencias del personal técnico.

Desarrollada con Flutter y Dart, la app consume la API REST creada en ASP.NET Core y mantiene la misma identidad visual del sitio web, ofreciendo una interfaz moderna, responsive y optimizada para la experiencia móvil. Esta integración entre ambas plataformas garantiza consistencia de datos, acceso rápido a la información y una experiencia fluida tanto para clientes como para el equipo del taller.`,
    tipo: "video",
    vimeoId: "1149512568",
    aspect: "16:9",
    thumbnail: "/assets/proyectos/appTallerMecanico.png",
    tecnologias: [
      "Flutter",
      "Dart",
      "ASP.NET Core",
      "Web API",
      "SQL Server",
    ],
  },

  {
    titulo: "App Móvil Canchas Xpress",
    descripcion: `Esta aplicación móvil complementa la plataforma web existente, ofreciendo una experiencia optimizada para dispositivos móviles y una usabilidad pensada para el usuario en movimiento.

Al consumir los mismos endpoints que la versión web, garantiza una integración fluida y datos siempre actualizados. Los usuarios pueden consultar la disponibilidad de las canchas, verificar precios y horarios, y gestionar sus reservas de forma rápida y sencilla desde su teléfono.

Por su parte, los administradores disponen de un panel de estadísticas que les permite visualizar información clave en tiempo real y una gestión simplificada de las canchas y reservas, posibilitando el control del negocio desde cualquier lugar.`,
    tipo: "video",
    vimeoId: "1149512304",
    aspect: "16:9",
    thumbnail: "/assets/proyectos/appCanchas.png",
    tecnologias: [
      "Flutter",
      "Dart",
      "ASP.NET Core",
      "Web API",
    ],
  },

  {
    titulo: "App Móvil para pedidos de hamburguesas",
    descripcion:
      "Esta es una aplicación móvil desarrollada en Flutter para gestionar el menú de hamburguesas, realizar pedidos y llevar su registro. Utiliza Firebase Firestore para el almacenamiento de datos en tiempo real y Firebase Core para la autenticación segura. Con un diseño basado en Material Design, ofrece una interfaz moderna, fluida y responsiva, garantizando una experiencia óptima en distintos dispositivos.",
    tipo: "video",
    vimeoId: "1149512269",
    aspect: "16:9",
    thumbnail: "/assets/proyectos/appHamburguesas.jpg",
    tecnologias: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "Material Design",
    ],
  },

  {
    titulo: "App Móvil Pokémon",
    descripcion:
      "Esta aplicación móvil, desarrollada en Flutter con Visual Studio Code, permite a los usuarios explorar una lista de Pokémon, acceder a información detallada sobre cada criatura y visualizar tanto sus habilidades como sus movimientos de combate. Con un diseño visualmente atractivo, utilizando fondos personalizados, tarjetas estilizadas e interacciones dinámicas, la aplicación consume la API pública PokeAPI para proporcionar datos en tiempo real.",
    tipo: "video",
    vimeoId: "1149512551",
    aspect: "16:9",
    thumbnail: "/assets/proyectos/appPokemon.jpg",
    tecnologias: [
      "Flutter",
      "Dart",
      "PokeAPI",
    ],
  },
];
