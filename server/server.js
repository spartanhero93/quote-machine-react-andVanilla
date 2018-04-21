const express = require("express");
const app = express();
const Data = require("./Data/index");


//<=== Serve using Vanilla JavaScript ===>//
app.use(express.static("../client"));//Vanilla

//<=== Serve using React ===>//
/* 
app.use("/", express.static(path.join(__dirname, "../client-react/build")));
*/ 


//<=== Routes ===>//
app.get("/getQuote", (req,res) => {
  res.send(Data)
})

//<=== Starting server ===>//
app.listen(process.env.PORT || 9000, console.log("Server is running!"));