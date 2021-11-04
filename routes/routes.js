const { Router } = require('express');
const router = Router();
const path = require('path')
const rerender = require('../utils/rerender.js')

module.exports = (app)=> {

  app.use("/chat", router);

    router.get('/', (req, res)=>{
       res.render('layouts/chat') 
     })
    router.get('/updatedTable', (req, res)=>{
       res.sendFile(path.join(__dirname, '../views/templates/table.ejs'))        
    })
}

