function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]

    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombre = fila.insertCell()
        celdaNombre.textContent= paciente.nombre
        const celdaApellido = fila.insertCell();
        celdaApellido.textContent= paciente.apellido
        const celdaCedulas = fila.insertCell();
        celdaCedulas.textContent=paciente.cedula
        const celdaEdades = fila.insertCell();
        celdaEdades.textContent=paciente.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=paciente.especialidad
        
        
    });
}

mostrarPacientes()