const modeloProyecto = {
    queryGetProyecto: "SELECT * FROM Prestamos",
    queryProyectoByID : `SELECT * FROM Prestamos WHERE ID=?`,
    queryDeleteProyectoByID : `UPDATE Prestamos SET Activo='N' WHERE ID=?`,
    queryProyectoExists : `SELECT PersonaEntrego FROM Prestamos WHERE PersonaEntrego = ?`,
    queryAddProyecto:`
    INSERT INTO Prestamos(
        PersonaEntrego,
        PersonaRecibo,
        Material,
        HoraPrestamo,
        TiempoPrestamo,
        HoraEntrega,
        FechaPrestamo, 
        Activo

    )VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )`,
    queryGetProyectoInfo : `SELECT PersonaEntrego,PersonaRecibo,Material,HoraPrestamo,TiempoPrestamo,HoraEntrega,FechaPrestamo FROM Prestamos WHERE PersonaEntrego = ?`,
    queryUpdateByProyecto : `
    UPDATE Prestamos SET
        PersonaRecibo= ?,
        Material= ?,
        HoraPrestamo= ?,
        TiempoPrestamo= ?,
        HoraEntrega= ?,
        FechaPrestamo= ?, 
    WHERE PersonaEntrego= ?`,

}
const updateProyecto = (
    PersonaRecibo,
    Material,
    HoraPrestamo,
    TiempoPrestamo,
    HoraEntrega,
    FechaPrestamo, 
    PersonaEntrego

) => {
    return `UPDATE Prestamos SET
                PersonaRecibo = '${PersonaRecibo}',
                Material = '${Material}',
                HoraPrestamo = '${HoraPrestamo}',
                TiempoPrestamo = '${TiempoPrestamo}',
                HoraEntrega = '${HoraEntrega}',
                FechaPrestamo = '${FechaPrestamo}'
            WHERE PersonaEntrego = '${PersonaEntrego}'`
}

module.exports = {modeloProyecto, updateProyecto}