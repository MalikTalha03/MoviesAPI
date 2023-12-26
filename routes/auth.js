import express from "express";

import { validate } from "../middleware/validate.js";
import { check } from "express-validator";
import { register } from "../controllers/auth.js";
import { register, login } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", 
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 })
    ], 
    validate, 
    register);

router.post("/login", 
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").exists()
    ], 
    validate, 
    login);

export default router;

