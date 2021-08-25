import express from "express"
import {createNotice, getNotice} from "../controllers/notice.js"


const router = express.Router();

router.get("/",getNotice)

router.post("/create",createNotice)

export default router