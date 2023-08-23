const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/stream_verse?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.4"
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log("db connection failed", err));
