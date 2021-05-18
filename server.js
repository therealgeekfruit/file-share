const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

connectDB();

const PORT = 3000 || process.env.PORT;

//Routes
app.use(express.json());
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use(express.static("public"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});
