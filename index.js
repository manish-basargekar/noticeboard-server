import express from "express";
import cors from "cors";
// import bodyParser from "body-parser";
import mongoose from "mongoose";

import noticeRoutes from "./routes/noticeRoutes.js"

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/notice", noticeRoutes);
app.get("/", (req, res) => {
	res.send("Hello to noticeboard api");
});

const PORT = process.env.PORT || 5000;
const host = "0.0.0.0";

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, host, () => console.log(`server running at PORT ${PORT}`))
	)
	.catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
