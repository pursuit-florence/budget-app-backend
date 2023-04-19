const express = require('express');
const transaction = express.Router();
const transArray = require("../models/transactions.js");  

//index - all transactions
transaction.get("/",(req, res) => {    
  res.json(transArray);    
  
});

transaction.post('/', (req, res) => {
  const transaction = {
        transactionId: Math.floor(Math.random() * 999999),
        item_name: req.body.item_name,
        amount: req.body.amount,
        date: req.body.date,
        from: req.body.from,
        category: req.body.category,
      }
    transArray.push(transaction)
    // transArray.push( req.body);
    res.json(transArray[transArray.length - 1]);
   
  })

//show - get one 
transaction.get("/:index", (req, res) => {
  const { index } = req.params;
  
  if (transArray[index]) {
    res.send(transArray[index]);
  } else {
    res.redirect("/404")
  }
})


transaction.delete('/:index', (req, res) => {
  const { index } = req.params;
  if(transArray[index]) {
    transArray.splice(index, 1);
    res.status(200).json({ status: 200, message: "resource deleted" });
  } else {
    res.redirect("/404")
  }
})

//update/put/patch for one log in bookmarksArray
transaction.put('/:index', (req, res) => {
  const { index } = req.params;
  if(transArray[index]) {
    transArray[index] = req.body;
    res.status(200).json({ status: 200, message: "resource updated" });
  } else {
    res.redirect("/404")
  }
})

module.exports = transaction