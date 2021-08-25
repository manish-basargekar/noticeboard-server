import express from "express"
import {createNotice, deleteNotice, getNotice, updateNotice} from "../controllers/notice.js"


const router = express.Router();

router.get("/",getNotice)

router.post("/create",createNotice)
router.delete("/delete/:id", deleteNotice)
router.patch("/update/:id", updateNotice )

export default router