const express = require("express");
// db
require("./db");

// routes
const userRouter = require("./routes/userRoutes");

const app = express();

//to convert JSON data coming from frontend
app.use(express.json());

// redirect to this
app.use("/api/user", userRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
