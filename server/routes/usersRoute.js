const { Router } = require("express");
const {
  getUserData,
  addUserData,
  clearUserData,
} = require("../controllers/userController");

const router = Router();

router.get("/users", getUserData);
router.post("/users", addUserData);
router.delete("/users", clearUserData);

module.exports = router;
