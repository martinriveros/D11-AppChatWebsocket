const socket = io();

let plantilla
let responseObjectTotal

fetch("/chat/updatedTable")
                  .then(response => response.text())
                  .then(template => {
                  createSocket()
                  plantilla = template
                  })   
                  .catch( e =>console.log('some shit happened' + e))

function createSocket(){

  socket.on('productNotification', socket => {
      socket.length===0? noProductos=true : noProductos=false
      responseObjectTotal = socket
      if(socket.length!==0) {renderTable(plantilla,noProductos,responseObjectTotal)}
      })
}
    
let formProducts = document.getElementById("formularioEnvioDatos")
let injectedProductsTable = document.querySelector("#tableInjection")
formProducts.addEventListener("submit", sendNewProduct);

function sendNewProduct(e){
  e.preventDefault()
  responseObject={
    name: e.srcElement[0].value,
    price: e.srcElement[1].value,
    thumbnail: e.srcElement[2].value
  }
  socket.emit('productNotification', responseObject)
};
  
function renderTable(){
  injectedProductsTable.innerHTML = ejs.render(plantilla, {noProductos, responseObjectTotal})}


///////////////////////////////////////////////////////////////////////////////////////////////


let formMsj = document.getElementById("formularioEnvioMensajes")
formMsj.addEventListener("submit", formularioEnvioMensajes);

// let  email = document.querySelector('#email')
// let  fechayhora = document.querySelector('#fechayhora')
// let  texto = document.querySelector('#texto')

let injectedMessages = document.querySelector('#injectedMessages')


function formularioEnvioMensajes(e){
  e.preventDefault()
    
  let responseObject={
    email: e.srcElement[0].value,
    message: e.srcElement[1].value,
    moment: Date.now()
  }
  socket.emit('messageNotification', responseObject)
};

socket.on('messageNotification', socket => {
  if(socket.length!==0){
  let htmlMessage=''
  socket.forEach(element => {
                
    
    htmlMessage+=`<span id="email">${element.email}</span><span id="fechayhora">${element.moment}</span><span id="texto">${element.message}</span></br>`

  })
  injectedMessages.innerHTML = htmlMessage}
})