const express = require("express");
const CalcController = require("../controllers/calc");

const router = express.Router();

router.get("/", CalcController.servirMenu);
router.post("/sum", CalcController.sum);
router.post("/sub", CalcController.sub);
router.post("/div", CalcController.div);
router.post("/mult", CalcController.mult);
router.post("/pot", CalcController.pot);
router.post("/raiz", CalcController.raiz);



module.exports = router;