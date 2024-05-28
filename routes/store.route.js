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
router.post("/store/create", createStore);
router.delete("/store/delete/:id", deleteStore);

module.exports = router;
