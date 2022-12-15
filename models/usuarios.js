const modeloUsuarios = {
    queryGetUsers: "SELECT * FROM Usuarios",
    queryUserByID : `SELECT * FROM Usuarios WHERE ID=?`,
    queryDeleteUserByID : `UPDATE Usuarios SET Activo='N' WHERE ID=?`,
    queryUserExists : `SELECT Usuario FROM Usuarios WHERE Usuario = ?`,
    queryAddUser:`
    INSERT INTO Usuarios(
        Usuario,
        Nombre,
        Apellidos,
        Contrasena,
        Departamento,
        Activo
    )VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )`,
    queryGetUserInfo : `SELECT Usuario,Nombre,Apellidos,Departamento FROM Usuarios WHERE Usuario = ?`,
    queryUpdateByUsuario : `
    UPDATE Usuarios SET
        Nombre=?,
        Apellidos= ?,
        Departamento= ?
    WHERE Usuario= ?`,

}
const updateUsuario = (
    Nombre,
    Apellidos,
    Departamento,
    Usuario
) => {
    return `UPDATE Usuarios SET
                Nombre = '${Nombre}',
                Apellidos = '${Apellidos}',
                Departamento = '${Departamento}'
            WHERE Usuario = '${Usuario}'`
}

module.exports = {modeloUsuarios, updateUsuario}