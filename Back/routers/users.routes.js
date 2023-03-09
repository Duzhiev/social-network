const { Router } = require("express");
const { usersController } = require("../controllers/users.controllers");

const router = Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.postUsers);
router.patch("/:id", usersController.editUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
