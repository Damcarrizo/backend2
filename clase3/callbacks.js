const dividir =(dividendo, divisor)=>{
    return new Promise((resolve, reject) => {
        if (divisor===0) {
            reject('no tengo plata porque coni gasta mucho')
        }
        else{
            resolve(dividendo/divisor);
        }
    })
}

dividir(6,0)
.then(resultado=>{
    console.log(resultado)
})
.catch(error=>{
    console.log(error)
})