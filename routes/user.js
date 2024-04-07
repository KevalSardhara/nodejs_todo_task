import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { postUserRegister, getAllUser, getUserData, postUserLogin, getUserLogout} from "../controllers/user.js";

// industry standered here
// http://127.0.0.1:5000/api/v1

const router = express.Router();

router.get("/all", getAllUser);

router.post("/new", postUserRegister);

router.post("/login", postUserLogin);

router.get("/logout", getUserLogout);

router.route("/userId/:id").get(getUserData);

router.get("/userId", isAuthenticated ,getUserData);

export default router;






// router.get("/userId", getUserId);
// // make the proper valid structure
// router.get("/userId/id", getUId);


// router.route("/userId/:id").get(getUserData).put(updateUser).delete(deleteUser);
// or //
// router.get("/userId/:id", getUserData);
// router.put("/userId/:id", updateUser);
// router.delete("/userId/:id", deleteUser);
