// Se creará una instancia de la clase “ProductManager” 
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo


class ProductManager {

#products


    constructor(){
        this.#products = []
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

        if (existsProduct || existsCode) {
            console.log('Error: Producto ya agregado, verifique la info ');
          
    }else{
        this.#products.push(product);
        console.log('Producto nuevo agregado');
    }
    }

    getProductById(id) {
        return this.#products.find((element) => {
            return element.id == id
        }) || 'ID no encontrado';
    }
}

const product1=  new ProductManager();



console.log(product1.addProducts('vaso vidrio', 'vasos', 20, 'no def', '1234', 23))
console.log(product1.addProducts('tenedor', 'cubiertos', 20, 'no def', '2345', 23))
console.log(product1.addProducts('tenedor', 'cubiertos', 20, 'no def', '2345', 23))
console.log(product1.getProducts());
console.log(product1.getProductById(1));
console.log(product1.getProductById(3));