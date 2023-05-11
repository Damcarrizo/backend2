const suma = (num1,num2)=> {
    return new Promise((resolve, reject) => {
        if(num1 ===0 || num2 ===0)
        reject('Operacion Necesaria');
let result = num1 + num2;
        if(result<0) 
        reject('La calculadora solo deve devolver positivos');
    
        resolve(num1 + num2);
    });
};

const resta = (num1,num2)=> {
    return new Promise((resolve, reject) => {
        if(num1 ===0 || num2 ===0)
        reject('Operacion Necesaria');

let result = num1 - num2;
        if(result<0) 
        reject('La calculadora solo deve devolver positivos');
    
        resolve(result);
    });
};

const multiplicacion = (num1, num2) =>{
    return new Promise((resolve, reject) => {
        let resultado = num1 * num2;
        if (resultado < 0) 
        reject('La calculadora solo puede devolver valores positivos')
        resolve(resultado)    
    });
};

const division = (dividendo, divisor) =>{
    return new Promise((resolve, reject) => {
        if(divisor ===0) 
        reject ('No se puede dividir por 0')
        resolve( dividendo/divisor)
    })
};

const calculos = async (num1, num2, callback) =>{
    try{
        let result = await callback (num1,num2);
        console.log(result)
        }catch(err){
            console.log(err);
        }
};

calculos(2, 4, suma);
calculos(5, 2, resta);
calculos(2, 2, multiplicacion);
calculos(6, 2, division);