const modeloProyecto = {
    queryGetProyecto: "SELECT * FROM Materiales",
    queryProyectoByID : `SELECT * FROM Materiales WHERE ID=?`,
    queryDeleteProyectoByID : `UPDATE Materiales SET Activo='N' WHERE ID=?`,
    queryProyectoExists : `SELECT Material FROM Materiales WHERE Material = ?`,
    queryAddProyecto:`
    INSERT INTO Materiales(
        Material,
        Cantidad,
        Activo
    )VALUES(
        ?,
        ?,
        ?
    )`,
    queryGetProyectoInfo : `SELECT Material,Cantidad FROM Materiales WHERE Material = ?`,
    queryUpdateByProyecto : `
    UPDATE Materiales SET
        Cantidad= ?
    WHERE Material= ?`,

}
const updateProyecto = (
    Cantidad,
    Material
) => {
    return `UPDATE Materiales SET
                Cantidad = '${Cantidad}'
            WHERE Material = '${Material}'`
}

module.exports = {modeloProyecto, updateProyecto}