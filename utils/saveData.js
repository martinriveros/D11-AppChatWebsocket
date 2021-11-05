const fs = require('fs');
const path = require('path');

async function saveProductData(data){
  let STRData = JSON.stringify(data)
  
  try {
    await fs.writeFileSync(path.join(__dirname, '../utils/products.json'), STRData, 'utf8');
  } catch (error) {
    console.log(error)
  }
  
}

async function saveMessageData(data){
  let STRData = JSON.stringify(data)
  
  try {
   await fs.writeFileSync(path.join(__dirname, '../utils/messages.json'), STRData, 'utf8'); 
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = {saveProductData,saveMessageData}