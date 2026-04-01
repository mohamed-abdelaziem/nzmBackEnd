import express from "express";
import { sendContactForm } from "../controller/contactController.js";

const router = express.Router();

router.post("/contact", sendContactForm);

export default router;