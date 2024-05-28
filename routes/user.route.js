const router = require("../helpers/router");

const {
  register,
  deleteUser,
  getUser,
  signIn,
  updateUser,
} = require("../controllers/user.controller");
const authentication = require("../middlewares/authentication");
const sellerAuthorization = require("../middlewares/authorization");

router.post("/register", register);
router.post("/signin", signIn);
router.use(authentication);
router.get("/user/:id", getUser);
router.put("/user/update/:id", updateUser);
router.delete("/user/delete/:id", deleteUser);

module.exports = router;
