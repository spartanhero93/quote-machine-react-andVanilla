const express = require("express");
const app = express();
const Data = require("./Data/index");


//<=== Middleware ===>//
app.use(express.static("../client"));

//<=== Routes ===>//
app.get("/getQuote", (req,res) => {
  res.send(Data)
})

//<=== Starting server ===>//
app.listen(process.env.PORT || 9000, console.log("Server is running!"));