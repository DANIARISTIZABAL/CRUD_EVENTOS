import express from "express";
import { createEvent, getEvents, deleteEvent } from "../controllers/eventController";

const router = express.Router();
router.post("/create/event", createEvent);
router.get("/get/event", getEvents);
router.delete("/delete/event/:id", deleteEvent);

export default router;
