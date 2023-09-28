const dictionary = {
  landingPage: {
    title: '¡Hola!',
    welcome: 'Bienvenido a',
    by: 'Por Andrés Frei',
    home: 'Empezar'
  },
  navbar: {
    drivers: 'Pilotos',
    teams: 'Equipos',
    nationalities: 'Nacionalidades',
    about: 'Acerca de',
    exit: 'Salir'
  },
  toolbar: {
    create: 'crear',
    more: 'opciones'
  },
  searchbar: {
    search: 'ingrese',
    btnsearch: 'buscar',
    btnclear: 'quitar',
    name: 'nombre',
    team: 'equipo',
    nationality: 'nacionalidad'
  },
  driverslist: {
    title: 'Listado de pilotos'
  },
  teamslist: {
    title: 'Listado de Equipos',
    searchPlaceholder: 'Buscar por nombre'
  },
  pagination: {
    first: 'primero',
    next: 'siguiente',
    back: 'anterior',
    last: 'ultimo'
  },
  driver: {
    btnback: 'volver',
    btnwiki: 'mas'
  },
  createdpage: {
    title: 'Crear un piloto',
    firstname: 'nombre',
    lastname: 'apellido',
    description: 'descripcion',
    image: 'url imagen',
    nationality: 'nacionalidad',
    birth: 'nacimiento',
    wiki: 'url wikipedia',
    teams: 'equipos (separados por coma)',
    btnSave: 'guardar',
    btnCancel: 'cancelar'
  },
  errors: {
    api: 'UPS! Parece que hubo un error con la API. Intntente nuvalemnte'
  },
  about: {
    about: 'Acerca de',
    back: 'Vovler',
    text: `Drivers PI es parte del curso FullStack de Henry, particularmente el proyecto individual.
Permite traer todos los pilotos de una API pública, pero tambien agregar nuestros propios pilotos y almacenarlos en una base de datos PosgresSQL.
No podíamos usar otra librería que las detalladas en el requerimiento.
`
  }
}

export default dictionary
