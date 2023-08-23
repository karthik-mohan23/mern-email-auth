const express = require("express");

// routes
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(userRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
