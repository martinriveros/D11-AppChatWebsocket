const e = require('express')

let dataFromWeb
let noProductos

module.exports = (app, responseObjectTotal) =>{
  const res = require('../routes/routes.js')
  let html 
  if(!responseObjectTotal[0].hasOwnProperty('price')){
    
  dataFromWeb=[{alert: "bad information"}]
  responseObjectTotal  =[{ name: 'MARTIN RIVEROS', price: '23123123123', thumbnail: 'asdad' }]
  noProductos = true
    }
  app.render('chat', {dataFromWeb,responseObjectTotal,noProductos}, (err, html)=>{html})
  return html
}
  