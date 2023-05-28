// Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.
// Se deberá utilizar la clase ProductManager que actualmente utilizamos con persistencia de archivos. 
// Desarrollar un servidor express que, en su archivo app.js importe al archivo de ProductManager que actualmente tenemos.
// El servidor debe contar con los siguientes endpoints:
// ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto. Agregar el soporte para recibir por query param el valor ?limit= el cual recibirá un límite de resultados.
// Si no se recibe query de límite, se devolverán todos los productos
// Si se recibe un límite, sólo devolver el número de productos solicitados
// ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el producto solicitado, en lugar de todos los productos. 
// Sugerencias
// Tu clase lee archivos con promesas. recuerda usar async/await en tus endpoints
// Utiliza un archivo que ya tenga productos, pues el desafío sólo es para gets. 
// Link al repositorio de Github con el proyecto completo, el cual debe incluir:
// carpeta src con app.js dentro y tu ProductManager dentro.
// package.json con la info del proyecto.
// NO INCLUIR LOS node_modules generados.


import fs from 'fs'

class ProductManager {

    #products
    #path
    
    
        constructor(){
            this.#products = [];
            this.#path = 'products.json';
            this.#addFile();
        }
    
        #addFile (){
            if(fs.existsSync(this.#path)){
                const dataProducts = fs.readFileSync(this.#path, 'utf-8');
                this.#products = JSON.parse(dataProducts); 
            }else{
                const data = JSON.stringify(this.#products)
                fs.writeFileSync(this.#path, data)

            }
        }



        getProducts () {
            return this.#products
            }
    
        addProducts = (title, description, price, thumbnail, code, stock) => {
            const product = {
                id: this.#products.length +1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            }
    
            const existsProduct = this.#products.find((element)=>{
               return element.id == product.id
            })
    
            const existsCode = this.#products.find((element)=>{
                return element.code == product.code 
        })

        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Error: Todos los campos son obligatorios");
            return
        }

            if (existsProduct || existsCode) {
                console.log('Error: Producto ya agregado, verifique la info ');
              
        }else{
            this.#products.push(product);
            const data = JSON.stringify(this.#products)
            fs.writeFileSync(this.#path, data)
            console.log('Producto nuevo agregado');
        }
        }
    
        getProductById(id) {
            return this.#products.find((element) => {
                return element.id == id
            }) || 'ID no encontrado';
        }

        updateProduct(id, key, value) {
            const products = this.getProducts();
            const product = products.find(product => product.id === id);
    
            
            if (!product) {
                return `No hay un producto con ese ${id}`;
                
            } else if (!(key in product)) {
                return `No hay dato "${key}" en el producto ${id}`;
                
            } else if (!value) {
                return `el valor es incorrecto`;
            } else {
                product[key] = value;
                
                try {
                    fs.writeFileSync(this.#path, JSON.stringify(products));
                } catch (err) {
                    return `Error: ${err}`;
                };
            };
        };
    
        deleteProduct(id) {
            const products = this.getProducts();
            const productList= products.findIndex(product => product.id === id);
    
            
            if (productList !== -1) {
                products.splice(productList, 1);
                try {
                    fs.writeFileSync(this.#path, JSON.stringify(products));
                } catch (err) {
                    return `Error: ${err}`;
                };
            } else {
                return `No hay prodcutos con el id: ${id}`;
            };
        };
    }
    
    const product1=  new ProductManager();
    
    
    
    console.log(product1.addProducts('vaso vidrio', 'vasos', 20, 'no def', '1234', 23))
    console.log(product1.addProducts('tenedor', 'cubiertos', 20, 'no def', '2345', 23))
    console.log(product1.addProducts('tenedor', 'cubiertos', 20, 'no def', '2345', 23))
    console.log(product1.addProducts('vaso cristal', 'vasos', 20, 'no def', '1235', 23))
    console.log(product1.addProducts('cuchara', 'cubiertos', 20, 'no def', '1236', 23))
    console.log(product1.addProducts('sarten', 'sartenes', 20, 'no def', '1237', 23))
    console.log(product1.addProducts('cacerola', 'olla', 20, 'no def', '1238', 23))
    console.log(product1.addProducts('espumadera', 'utensillos', 20, 'no def', '1239', 23))
    console.log(product1.addProducts('palo de amazar', 'utensillos', 20, 'no def', '2346', 23))
    console.log(product1.addProducts('taza', 'vasos', 20, 'no def', '2347', 23))
    console.log(product1.addProducts('taza cafe', 'vasos', 20, 'no def', '2348', 23))
    console.log(product1.addProducts('taza cafe', 'vasos', 'no def', '2348', 23))

    console.log(product1.getProducts());
    console.log(product1.getProductById(1));
    console.log(product1.getProductById(3));
    console.log(product1.updateProduct(1,'title','vaso plastico'));
    console.log(product1.deleteProduct(2));