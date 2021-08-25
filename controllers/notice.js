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

export const deleteNotice = async (req,res) => {
    const {id} = req.params

    console.log(id);

    if(!Mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No notice with that Id")
    }

    await NoticeMessage.findByIdAndRemove(id)

    res.json({message:"Notice deleted successfully"})
}

export const updateNotice = async (req, res) => {
	const { id:_id } = req.params;
    const notice = req.body

	if (!Mongoose.Types.ObjectId.isValid(_id)) {
		return res.status(404).send("No notice with that Id");
	}

    const updatedNotice = await NoticeMessage.findByIdAndUpdate(_id,{...notice, _id},{new:true})

	res.json(updatedNotice);
};

