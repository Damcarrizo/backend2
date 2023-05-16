const fs = require ('fs').promises;

const leerPackage = async() => {
    try{
    const package = await fs.readFile('package.json', 'utf-8');
    const info = {
        contenidoStr: package,
        contenidoObj: JSON.parse(package),
        size: Buffer.byteLength(package),
};

await fs.writeFile('info.json', JSON.stringify(info));
return 'Se escribio correctamente';
    }catch(err){
        throw new Error(err);
    }
};

leerPackage()
.then((res)=> console.log(res))
.cath ((err)=> console.log('error:',err));
