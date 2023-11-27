const express = require("express");
const router = express.Router();

const userController = require("../controllers/siswa");

router.get("/eskul", userController.index);

//untuk ambil data berdasarkan id
router.get("/eskul/:id", userController.show);

router.post("/eskul", userController.store);

router.put("/eskul/:id", userController.update);

router.delete("/eskul/:id", userController.delete);

module.exports = router;