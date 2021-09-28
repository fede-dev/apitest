const express = require("express");
const { userController } = require("../controller");
const router = express.Router();

router.get("/", userController.getUser);
router.post("/", userController.insertUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
