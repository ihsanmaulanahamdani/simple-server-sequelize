const router = require("../helpers/router");

const {
  createStore,
  deleteStore,
  getStore,
} = require("../controllers/store.controller");
const authentication = require("../middlewares/authentication");
const sellerAuthorization = require("../middlewares/authorization");

router.get("/store/:id", getStore);
router.use(authentication);
router.use(sellerAuthorization);
router.post("/create", createStore);
router.delete("/delete/:id", deleteStore);

module.exports = router;
