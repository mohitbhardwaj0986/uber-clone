import express from "express";
const router = express.Router();

import { body } from "express-validator";
import { register } from "../controllers/user.controllers.js";

router.post("/register", [
  body("email").isEmail().withMessage("invalid Email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("first name must be 3 characters long"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("password must be 8 characters long"),
], register);

export default router;
