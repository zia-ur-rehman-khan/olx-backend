const express = require("express")
const router = express.Router()

const addControler = require("./addControler")



router.post("/add-productdetailes",addControler.addproductdetailes)
router.post("/delete-by-id",addControler.deleteAdd)




router.get("/get-all-add",addControler.getalladds)


module.exports = router