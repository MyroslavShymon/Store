const Router = require("express");
const router = new Router();
const { typeController } = require("../controller");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.post("/", checkRoleMiddleware("ADMIN"), typeController.create);
router.get("/", checkRoleMiddleware("ADMIN"), typeController.getAll);

module.exports = router;
