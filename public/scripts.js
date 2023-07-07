// Enviar formulario de nuevo paciente
const pacienteForm = document.getElementById('pacienteForm');
pacienteForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(pacienteForm);
  const pacienteData = Object.fromEntries(formData.entries());

  fetch('/api/pacientes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pacienteData)
  })
    .then(response => {
      if (response.ok) {
        alert('Paciente creado exitosamente');
        pacienteForm.reset();
      } else {
        throw new Error('Error al crear el paciente');
      }
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario: ' + error.message);
    });
});

// Enviar formulario de nuevo doctor
const doctorForm = document.getElementById('doctorForm');
doctorForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(doctorForm);
  const doctorData = Object.fromEntries(formData.entries());

  fetch('/api/doctores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(doctorData)
  })
    .then(response => {
      if (response.ok) {
        alert('Doctor creado exitosamente');
        doctorForm.reset();
      } else {
        throw new Error('Error al crear el doctor');
      }
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario: ' + error.message);
    });
});

// Enviar formulario de nueva cita
const citaForm = document.getElementById('formulario-cita');
citaForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(citaForm);
  const citaData = Object.fromEntries(formData.entries());

  fetch('/api/citas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(citaData)
  })
    .then(response => {
      if (response.ok) {
        alert('Cita creada exitosamente');
        citaForm.reset();
      } else {
        throw new Error('Error al crear la cita');
      }
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario: ' + error.message);
    });
});
