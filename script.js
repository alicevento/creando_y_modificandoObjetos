//Aplicando los conceptos y herramientas aprendidas hasta ahora, nos pondremos en el caso de que un consultorio médico requiere un programa realizado en JavaScript, que permita almacenar y/o modificar los datos de sus pacientes. Así como filtrar y mostrar los pacientes por nombre para poder hacer una búsqueda más rápida y ubicar la historia médica de cada persona. En el siguiente diagrama UML se puede observar cual es la cardinalidad de los objetos y las propiedades que tiene cada uno.
//Consultorio (Nombre, paciente) hacia Paciente (Nombre, edad, rut, diagnóstico)

//Primeramente se deben mostrar todos los pacientes con sus datos personales, luego mediante un método de búsqueda, mostrar los datos del paciente que concuerden con el nombre que se envíe al método como argumento. Igualmente se deben proteger los datos y evitar modificaciones directas, por lo que se debe implementar getters y setters. Todo esto se puede mostrar en la consola del navegador web de tu preferencia.

//Crear una función constructora para cada objeto.
// Función constructora para Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;
}

// Métodos getter y setter para Nombre
Paciente.prototype.getNombre = function() {
    return this._nombre;
};

Paciente.prototype.setNombre = function(nombre) {
    this._nombre = nombre;
};

// Métodos getter y setter para Edad
Paciente.prototype.getEdad = function() {
    return this._edad;
};

Paciente.prototype.setEdad = function(edad) {
    this._edad = edad;
};

// Métodos getter y setter para Rut
Paciente.prototype.getRut = function() {
    return this._rut;
};

Paciente.prototype.setRut = function(rut) {
    this._rut = rut;
};

// Métodos getter y setter para Diagnóstico
Paciente.prototype.getDiagnostico = function() {
    return this._diagnostico;
};

Paciente.prototype.setDiagnostico = function(diagnostico) {
    this._diagnostico = diagnostico;
};

// Método para buscar los datos de un paciente por nombre
Paciente.prototype.buscarPorNombre = function(nombre) {
    if (this._nombre === nombre) {
        console.log("Paciente encontrado:");
        console.log("Nombre:", this._nombre);
        console.log("Edad:", this._edad);
        console.log("RUT:", this._rut);
        console.log("Diagnóstico:", this._diagnostico);
    } else {
        console.log("No se encontró un paciente con el nombre especificado.");
    }
};

// Método para mostrar todos los datos de los pacientes registrados en el consultorio
Consultorio.prototype.mostrarTodos = function() {
    console.log("Consultorio:", this._nombre);
    for (let paciente of this._pacientes) {
        console.log("Nombre:", paciente.getNombre());
        console.log("Edad:", paciente.getEdad());
        console.log("Rut:", paciente.getRut());
        console.log("Diagnóstico:", paciente.getDiagnostico());
    }
};

// Función constructora para Consultorio
function Consultorio(nombre) {
    this._nombre = nombre;
    this._pacientes = [];
}

// Método para agregar un paciente al consultorio
Consultorio.prototype.agregarPaciente = function(paciente) {
    this._pacientes.push(paciente);
};

// Método para buscar un paciente por nombre en el consultorio
Consultorio.prototype.buscarPacientePorNombre = function(nombre) {
    for (let paciente of this._pacientes) {
        if (paciente.getNombre() === nombre) {
            return paciente;
        }
    }
    return null;
};

// Crear instancias de Paciente
const paciente1 = new Paciente("Juan", 25, "12345678-9", "diagnóstico1");
const paciente2 = new Paciente("Pedro", 25, "12345678-9", "diagnóstico2");
const paciente3 = new Paciente("María", 25, "12345678-9", "diagnóstico3");

// Crear instancias de Consultorio
const consultorio1 = new Consultorio("Consultorio 1");
const consultorio2 = new Consultorio("Consultorio 2");
const consultorio3 = new Consultorio("Consultorio 3");

// Agregar pacientes al consultorio
consultorio1.agregarPaciente(paciente1);
consultorio2.agregarPaciente(paciente2);
consultorio3.agregarPaciente(paciente3);

// Mostrar todos los pacientes registrados en cada consultorio
consultorio1.mostrarTodos();
consultorio2.mostrarTodos();
consultorio3.mostrarTodos();

// Buscar un paciente por nombre
const pacienteEncontrado = consultorio1.buscarPacientePorNombre("Juan");
// Mostrar los datos del paciente encontrado
if (pacienteEncontrado) {
    console.log("Paciente Encontrado:");
    console.log("Nombre:", pacienteEncontrado.getNombre());
    console.log("Edad:", pacienteEncontrado.getEdad());
    console.log("Rut:", pacienteEncontrado.getRut());
    console.log("Diagnóstico:", pacienteEncontrado.getDiagnostico());
} else {
    console.log("No se encontró un paciente con el nombre especificado.");
}

