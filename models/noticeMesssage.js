import mongoose from "mongoose"

const noticeSchema = mongoose.Schema({
    title:String,
    description:String,
    creator:String,
    tags:[String],
    createdAt:{
        type:Date,
        default: new Date()
    }
})

const NoticeMessage = mongoose.model('NoticeMessage', noticeSchema)

export default NoticeMessage