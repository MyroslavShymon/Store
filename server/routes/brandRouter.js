const Router = require("express");
const router = new Router();
const { brandController } = require("../controller");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.post("/", checkRoleMiddleware("ADMIN"), brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
