/* *****************************************
  3. Filtrado de Usuarios por Especialidad:
***************************************** */
// Crea una función para filtrar usuarios por su especialidad.

function filtrarUsuariosPorEspecialidad(usersData, especialidad) {
  return usersData.filter(usuario => usuario.specialty === especialidad);
}

module.exports = filtrarUsuariosPorEspecialidad;