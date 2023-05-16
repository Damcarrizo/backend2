const fs = require ('fs')


//fecha
const fecha = new Date().toDateString();

fs.writeFile('fecha.txt', fecha, (error,)=>{

    if(error){
        console.log(error);
        return;
    }

   fs.readFile('fecha.txt','utf-8',(error,resolve)=>{
    if(error){
        console.log('Hubo un error en la lectura')
    }else{
        console.log(resolve)
    }
   })
})