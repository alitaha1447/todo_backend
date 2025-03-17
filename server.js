import express from "express";
import cors from "cors";

// MONGODB CONNECTION
import connectDb from "./src/config/dbConfig.js";
connectDb();

// ROUTERS
// import authRouter from "./src/routers/authRouters.js";
// import taskRouter from "./src/routers/taskRouters.js";
// import userRouter from "./src/routers/userRouters.js";

var app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/jobs", taskRouter);
// app.use("/api/v1/user", userRouter);
app.use("/", (req, res) => {
  res.send("Hello Server versel");
});

const PORT = process.env.PORT || 5200;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
