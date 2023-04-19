const express = require('express');
const cors = require('cors')
const app = express();
const transactionController = require("./controllers/transactionController");

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {;
  next();
});

app.get("/",(req,res)=> {
    res.send("Hello Welcome")
})

app.use("/transactions", transactionController); 

app.get("*", (req, res) => {
  console.log("404!");
  res.status(404).json({ error: "Page Not Found" });
});


module.exports = app;