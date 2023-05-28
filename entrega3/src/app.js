import express from 'express'
import ProductManager from '../productManager'

const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/products', (req,res) => {
    res.send('Lista de productos')
})

app.get('/products/:pid',(req,res) => {
    const {id} = req.params;
    const product = products.find(product=> product.id == id)
    if(product) return res.json(product);
    res.json({error:'Producto no encontrado, intente de nuevo'})
})


app.listen(8080, () => {
    console.log("Server is running on port 8080")
})