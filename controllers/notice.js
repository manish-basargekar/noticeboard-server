import Mongoose  from "mongoose";
import NoticeMessage from "../models/noticeMesssage.js";

export const getNotice = async (req, res) => {
	try {
		const noticeMessage = await NoticeMessage.find();

		// console.log("11",postMessage);

		res.status(200).json(noticeMessage);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};


export const createNotice = async (req,res) => {
    const notice = req.body
    const newNotice = new NoticeMessage(notice)

    try {
        await newNotice.save()
        res.status(201).json(newNotice)
    } catch(error){
        res.status(409).json(error)
    }
}