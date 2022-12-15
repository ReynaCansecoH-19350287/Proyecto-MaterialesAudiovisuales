const {Router} = require("express")
const {getProyecto, getProyectoByID, deleteProyectobyID, addProyecto, updateProyectoByProyecto} = require("../controllers/materiales")
const router = Router()

//http://localhost:4000/api/v1/materiales

//GET
router.get("/", getProyecto)
router.get("/id/:id", getProyectoByID)

//DELETE
router.delete("/", deleteProyectobyID)

//POST
router.post("/", addProyecto)

//PUT
router.put("/", updateProyectoByProyecto)

module.exports = router