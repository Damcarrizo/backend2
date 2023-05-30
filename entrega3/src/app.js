import express from 'express'
import ProductManager from './productManager.js'

const app = express()

const product1 = new ProductManager()

app.use(express.urlencoded({
    extended: true
}))

app.get('/products', (req, res) => {
    const products = product1.getProducts()
    let { limit} = req.query;
    if (limit)
        return res.json(products.slice(0, parseInt(limit)))
    return res.json(products);
})

app.get('/products/:pid', (req, res) => {
    const {pid} = req.params;
    const product = product1.getProductById(pid)
    if (product) return res.json(product);
    res.json({ error: 'Producto no encontrado, intente de nuevo'})
})


app.listen(8080, () => {
    console.log("Server is running on port 8080")
})



// console.log(product1.addProducts('vaso vidrio', 'vasos', 20, 'no def', '1234', 23))
// console.log(product1.addProducts('tenedor', 'cubiertos', 20, 'no def', '2345', 23))
// console.log(product1.addProducts('tenedor', 'cubiertos', 20, 'no def', '2345', 23))
// console.log(product1.addProducts('vaso cristal', 'vasos', 20, 'no def', '1235', 23))
// console.log(product1.addProducts('cuchara', 'cubiertos', 20, 'no def', '1236', 23))
// console.log(product1.addProducts('sarten', 'sartenes', 20, 'no def', '1237', 23))
// console.log(product1.addProducts('cacerola', 'olla', 20, 'no def', '1238', 23))
// console.log(product1.addProducts('espumadera', 'utensillos', 20, 'no def', '1239', 23))
// console.log(product1.addProducts('palo de amazar', 'utensillos', 20, 'no def', '2346', 23))
// console.log(product1.addProducts('taza', 'vasos', 20, 'no def', '2347', 23))
// console.log(product1.addProducts('taza cafe', 'vasos', 20, 'no def', '2348', 23))
// console.log(product1.addProducts('taza cafe', 'vasos', 'no def', '2348', 23))

// console.log(product1.getProducts());
// console.log(product1.getProductById(1));
// console.log(product1.getProductById(3));
// console.log(product1.updateProduct(1, 'title', 'vaso plastico'));
// console.log(product1.deleteProduct(2));